# Weatherly - A weather app using the Weatherbit.io API

Weatherly is a full-stack MERN app which provides current and forecasted weather information from the Weatherbit API based on searches by city, postcode or latitude and longitude.

Recent searches are saved to a MongoDB database and returned on the front end to the user. The API key is from a free account and will expire in 21 days but can be regenerated with a free account at `weatherbit.io`

# Tools used
  - ReactJS 
  - Semantic UI
  - Node
  - MongoDB
  - Express
  - Jest
  - React Testing Library
  - LogoMakr: https://logomakr.com/

# How to run the app

Ensure you have MongoDB Community installed. I recommend using MongoDB Compass to view database info.

- Install dependencies in client and server folders separately with ```npm install```
- ```npm run server:dev``` within server
- ```npm run start``` within client
- ```npm run seeds``` can be used to clear the DB or run custom seeds of location data

# Main page

<img width="1022" alt="image" src="https://github.com/JemmaPhillips/weather_app_/assets/149424304/a157a6fc-0536-48fa-bc9a-6674e73f15fc">


# Search Results

<img width="941" alt="image" src="https://github.com/JemmaPhillips/weather_app_/assets/149424304/473f76f9-724a-4bba-bf10-219ede91d873">

<img width="1012" alt="image" src="https://github.com/JemmaPhillips/weather_app_/assets/149424304/a765f3f2-cc34-41e0-9a45-f05f12e2827f">


# Areas for further development
  - Extend unit testing and/or create integration and end to end tests using jest and/or cypress
  - Additional UX features - perhaps loading an image of the location via unsplash once that location has been searched
  - Perhaps provide the forecasting info for all searches in a dropdown menu


