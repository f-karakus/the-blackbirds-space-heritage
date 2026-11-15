#!/usr/bin/env python3
"""
THE BLACKBIRDS — NASA SPACE APPS CHALLENGE ("ABANDONED, BUT NOT FORGOTTEN")
Multi-threaded Local HTTP Server with RFC 7233 Byte-Range (206 Partial Content)
support for instant HTML5 <video> scroll-scrubbing of large NASA MP4 archives.
"""

import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))


class RangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".glb": "model/gltf-binary",
        ".gltf": "model/gltf+json",
        ".wasm": "application/wasm",
        ".mp4": "video/mp4",
        ".webm": "video/webm",
        ".js": "application/javascript",
        ".mjs": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        ctype = self.guess_type(path)
        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            fs = os.fstat(f.fileno())
            file_len = fs[6]
            range_header = self.headers.get("Range")

            if range_header:
                m = re.match(r"bytes=(\d*)-(\d*)", range_header)
                if m:
                    start_str, end_str = m.groups()
                    if start_str == "":
                        # suffix range: bytes=-500
                        suffix = int(end_str)
                        start = max(0, file_len - suffix)
                        end = file_len - 1
                    else:
                        start = int(start_str)
                        end = int(end_str) if end_str else file_len - 1

                    if start >= file_len:
                        self.send_response(416, "Requested Range Not Satisfiable")
                        self.send_header("Content-Range", f"bytes */{file_len}")
                        self.end_headers()
                        f.close()
                        return None

                    end = min(end, file_len - 1)
                    length = end - start + 1

                    self.send_response(206, "Partial Content")
                    self.send_header("Content-type", ctype)
                    self.send_header("Content-Range", f"bytes {start}-{end}/{file_len}")
                    self.send_header("Content-Length", str(length))
                    self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
                    self.end_headers()
                    f.seek(start)
                    self._range_bytes_left = length
                    return f

            self._range_bytes_left = None
            self.send_response(200)
            self.send_header("Content-type", ctype)
            self.send_header("Content-Length", str(file_len))
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()
            return f
        except Exception:
            f.close()
            raise

    def copyfile(self, source, outputfile):
        bytes_left = getattr(self, "_range_bytes_left", None)
        chunk_size = 64 * 1024
        try:
            if bytes_left is None:
                super().copyfile(source, outputfile)
            else:
                while bytes_left > 0:
                    buf = source.read(min(chunk_size, bytes_left))
                    if not buf:
                        break
                    outputfile.write(buf)
                    bytes_left -= len(buf)
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            # Normal when browser cancels in-flight range request during rapid video scrubbing
            pass

    def log_message(self, format, *args):
        # Keep console output clean
        pass


if __name__ == "__main__":
    os.chdir(ROOT_DIR)
    server = ThreadingHTTPServer(("0.0.0.0", PORT), RangeHTTPRequestHandler)
    print(f"[The BlackBirds] HTTP 206 Range Server listening on http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
