# DeskThing-FortuneCookie

A fortune cookie app for DeskThing that displays random wisdom, life goals, and inspirational quotes on your Spotify Car Thing / DeskThing device.

**No API keys or accounts required!** All fortunes are built-in.

## Features

- **75+ Unique Fortunes** across 6 categories: Adventure, Skill, Experience, Wisdom, Chaos, Principle
- **Auto-Refresh** — fortunes rotate automatically on a configurable interval
- **No Keys Needed** — completely self-contained, no external APIs
- **Category Filter** — optionally filter by fortune category in Settings
- **Clean UI** — designed for the Car Thing's 800×480 display

## Installation

### Prerequisites

- [DeskThing](https://deskthing.app/)

### Setup

1. Download the latest release build
2. Navigate to `Downloads > App` tab and click `Upload App`
3. Select the `fortune-cookie-app-v{version}.zip` file
4. (Optional) Navigate to `Settings` for Fortune Cookie to configure:
   - **Auto-Refresh Interval** — seconds between fortune changes (default: 30s)
   - **Category Filter** — show all or filter to a specific category
5. Enjoy your fortunes!

## Development

```bash
pnpm install
pnpm dev
```

## Architecture

This follows the standard DeskThing app pattern (like [DeskThing-GitHub](https://github.com/dakota-kallas/DeskThing-GitHub)):

- `server/` — Node.js backend that manages fortune selection and sends data to the client
- `src/` — Vite + React frontend that displays fortunes on the device
- `src/data/fortunes.ts` — All fortune data and types (shared between server and client)
- `src/stores/` — Client-side stores for DeskThing message handling

## Credits

Created by Michael Barbine / PH3AR
