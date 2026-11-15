# Abandoned, But Not Forgotten

> **NASA Space Apps Challenge** | Team **The BlackBirds** (Ankara, Türkiye)  
> An interactive 3D and scroll-driven digital museum preserving the engineering heritage of humanity's off-world spacecraft on the Moon, Mars, and in interstellar space.

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](./LICENSE)
[![Data: NASA Open Data](https://img.shields.io/badge/Data-NASA%20NSSDCA%20%7C%20SVS%20%7C%20Trek-blue.svg)](https://nssdc.gsfc.nasa.gov/)

---

## Project Overview

Over the past six decades, robotic explorers and lunar surface craft have expanded the boundaries of human knowledge far beyond Earth—yet almost none ever came home. **Abandoned, But Not Forgotten** transforms real NASA mission telemetry, orbital imagery, and 3D hardware models into a single-page bilingual (`EN` / `TR`) scrollytelling exhibition designed for students, educators, and space enthusiasts.

### Challenge Alignment & Key Features

1. **60 FPS Scroll-Bound Launch Telemetry Scrubber (`HTML5 Canvas` + `GSAP ScrollTrigger`):**
   - Scrolling drives 96 pre-extracted frames from the real **OSIRIS-REx / Atlas V 411** launch sequence at Cape Canaveral SLC-41 (**NASA SVS #12716**).
   - Synchronized HUD readouts compute elapsed mission time (`T-04s` to `T+18s`), altitude (`0 m → 1,140 m`), velocity (`0 → 378 km/h`), propellant remaining, and mission phase markers.
2. **Interactive 3D NASA Hardware Inventory (`<model-viewer>` + Draco GLB):**
   - Inspect official NASA `.glb` models in 360° with interactive annotations:
     - **Apollo 11 Lunar Module 'Eagle'** (`1969-059C`)
     - **Lunar Roving Vehicle — Apollo 15, 16, 17** (`1971-063C`, `1972-031C`, `1972-096C`)
     - **Viking 1 Lander** (`1975-075C`)
     - **Opportunity Rover (MER-B)** (`2003-032A`)
     - **InSight Mars Lander** (`2018-042A`)
     - **Ingenuity Mars Helicopter** (`2020-052B`)
     - **Voyager 1 & The Golden Record** (`1977-084A`)
3. **NSSDCA-Verified Bilingual Archive Cards & Audio Narration:**
   - Every mission card pairs narrative storytelling with verified **NASA NSSDCA** launch/landing dates, planned vs. actual operational lifespans, failure/retirement causes, scientific contributions, direct primary-source links, and `Web Speech API` (`EN`/`TR`) audio playback.
   - Includes an interactive **InSight Dusty Selfie Slider** (`PIA22876` vs. `PIA25287`) and dual **Voyager 1 Golden Record (`PIA21741`) & Pale Blue Dot (`PIA23645`)** gallery.
4. **Interactive Moon & Mars Coordinate Atlas (`Leaflet.js` + NASA Trek Layers):**
   - Switch between **Lunar** and **Martian** surface mosaics and fly directly to verified landing coordinates (`Mare Tranquillitatis`, `Taurus-Littrow`, `Chryse Planitia`, `Perseverance Valley`, `Elysium Planitia`, `Jezero Crater`).
5. **Space Heritage Ambassador Quiz:**
   - Interactive knowledge check awarding the *Abandoned, But Not Forgotten — Space Heritage Ambassador* badge.

---

## Official NASA Open Data & Resources Used

| Resource | Spacecraft / Subject | Official ID & Citation |
| :--- | :--- | :--- |
| **NASA Scientific Visualization Studio (SVS)** | OSIRIS-REx Atlas V 411 Launch | [SVS #12716](https://svs.gsfc.nasa.gov/12716/) (`NSSDCA 2016-055A`) |
| **NASA Scientific Visualization Studio (SVS)** | Hubble Andromeda (M31) PHAT Mosaic Background | [SVS #30561](https://svs.gsfc.nasa.gov/30561/) |
| **NASA NSSDCA Master Catalog** | Apollo 11 Eagle Descent Stage | [1969-059C](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C) |
| **NASA NSSDCA Master Catalog** | Apollo 15, 16, 17 Lunar Roving Vehicles | [1971-063C](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C), [1972-031C](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-031C), [1972-096C](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C) |
| **NASA NSSDCA Master Catalog** | Viking 1 Lander | [1975-075C](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C) |
| **NASA NSSDCA Master Catalog** | Opportunity Rover (MER-B) | [2003-032A](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A) |
| **NASA NSSDCA Master Catalog** | InSight Mars Lander | [2018-042A](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A) |
| **NASA NSSDCA Master Catalog** | Ingenuity Mars Helicopter | [2020-052B](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052B) |
| **NASA NSSDCA Master Catalog** | Voyager 1 | [1977-084A](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1977-084A) |
| **NASA 3D Resources & VTAD** | Official Spacecraft `.glb` Models | [science.nasa.gov/3d-resources](https://science.nasa.gov/3d-resources/) & [NASA-3D-Resources](https://github.com/nasa/NASA-3D-Resources) |
| **NASA Solar System Treks & JPL Photojournal** | Moon/Mars Map Layers & Archival Photos | [trek.nasa.gov/moon](https://trek.nasa.gov/moon), [trek.nasa.gov/mars](https://trek.nasa.gov/mars), `PIA22876`, `PIA25287`, `PIA21741`, `PIA23645` |

---

## Architecture & Running Locally

The platform is built with zero-build, dependency-bundled static web technologies (`HTML5`, `CSS3`, `Vanilla JS`, `GSAP`, `Lenis`, `Google <model-viewer>` with local Draco decoders, and `Leaflet.js`) so it runs immediately in any modern browser or static host (GitHub Pages, Netlify, Vercel).

```bash
# Option 1: Double-click baslat.bat (Windows)
# Option 2: Run Python static server from project root
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

> **Note on Launch Assets:** Rather than streaming a 104 MB `.mp4` video during scroll scrubbing (which causes CPU spikes and frame stutter), the runtime uses 96 lightweight pre-extracted JPEG frames in `assets/osiris_frames/` (`f_000.jpg`–`f_095.jpg`) rendered smoothly on an HTML5 `<canvas>`.

---

## Türkçe Kısa Özet (Team The BlackBirds)

**Abandoned, But Not Forgotten (*Terk Edildi, Ama Unutulmadı*)**, The BlackBirds takımı tarafından NASA Space Apps Challenge kapsamında geliştirilen çift dilli (`EN`/`TR`) interaktif dijital uzay müzesidir. Gerçek **NASA SVS #12716** OSIRIS-REx / Atlas V 411 fırlatma sekansını, **Hubble Andromeda (#30561)** derin uzay arka planını, resmi 3B NASA `.glb` modellerini, **NSSDCA** doğrulamalı bilgi kartlarını, **Moon/Mars Trek** harita koordinatlarını ve sesli anlatımı tek bir tarayıcı deneyiminde birleştirir.

Licensed under the [MIT License](./LICENSE).
