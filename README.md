# Weatherly - A weather app using the Weatherbit.io API

Weatherly is a full-stack MERN app which provides current and forecasted weather information from the Weatherbit API based on searches by city, postcode or latitude and longitude.

Recent searches are saved to a MongoDB database and returned on the front end to the user. The API key is from a free account and will expire in 21 days but can be regenerated with a free account at `weatherbit.io`

# Tools used
  - ReactJS 
  - Semantic UI
  - Node
  - MongoDB
  - Express
  - LogoMakr: https://logomakr.com/

# How to run the app

Ensure you have MongoDB Community installed. I recommend using MongoDB Compass to view database info.

- Install dependencies in client and server folders separately with ```npm install```
- ```npm run server:dev``` within server
- ```npm run start``` within client
- ```npm run seeds``` can be used to clear the DB or run custom seeds of location data

# Main page

![image](https://user-images.githubusercontent.com/72317734/117377129-7127e980-aeca-11eb-9561-0049063e5619.png)

# Search Results

![image](https://user-images.githubusercontent.com/72317734/117377162-869d1380-aeca-11eb-89d4-165e57eb85d2.png)

![image](https://user-images.githubusercontent.com/72317734/117377183-94529900-aeca-11eb-8416-c7ec37207bf9.png)


# Areas for further development
  - Include unit, integration or perhaps even end to end tests using jest and/or cypress
  - Additional UX features - perhaps loading an image of the location via unsplash once that location has been searched
  - Perhaps provide the forecasting info for all searches in a dropdown menu


