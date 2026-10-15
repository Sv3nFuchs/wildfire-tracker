# Wildfire Tracker:

A React app that displays active wildfires from the last thirty days on a Google Map, driven by NASA's EONET API. To see information about a given wildfire, the user clicks on an icon/marker.

Created by following Traversy Media's Wildfire Tracker tutorial on YouTube.

## Setup:

1. Clone the repo and install dependencies:
```
   npm install
```
2. Copy `.env.example` to `.env.local` and add your own Google Maps API key:
```
   cp .env.example .env.local
```
3. Start the app:
```
   npm start
```

The app is run through http://localhost:3000.

## Example:

<img width="1470" height="956" alt="Skärmavbild 2026-10-15 kl  13 38 13" src="https://github.com/user-attachments/assets/40747cd4-de2d-449c-a941-9fbc825471c7" />

## Changes made from the tutorial:

- Used `@vis.gl/react-google-maps` instead of `google-map-react` due to it being outdated, which eventually caused a bug where the markers would drift as the map moved.
- Updated the code to only show open events from the past thirty days, instead of including old wildfires that NASA still lists as open.
- Used default parameters instead of `defaultProps`, as the tutorial used an outdated version of React that wasn't compatible with the current version.
- Placed each marker at the wildfire's most recent position, as opposed to the original position.


## Tech:

JavaScript, React, NASA EONET API, Google Maps JavaScript API, `@vis.gl/react-google-maps`.

## Credit:

Based on the Wildfire Tracker tutorial by Traversy Media.
