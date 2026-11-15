@echo off
chcp 65001 >nul
echo ============================================================================
echo   THE BLACKBIRDS — NASA SPACE APPS CHALLENGE ("ABANDONED, BUT NOT FORGOTTEN")
echo   Yerel Sunucu Baslatiliyor: http://localhost:8080
echo ============================================================================
start "" "http://localhost:8080"
python server.py 8080
