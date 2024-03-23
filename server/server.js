const express = require("express");
const app = express();

// require parser to deal with the body object during weather post request
const parser = require("body-parser");

// enable cors
const cors = require("cors");
app.use(cors());

// use parser
app.use(parser.json());

// mongodb is used for the weathersaves collection
// using mongodb compass can view db which will save api data to be persisted

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("weathersavesDB");
    const weathersavesCollection = db.collection("weathersaves");
    const weathersavesRouter = createRouter(weathersavesCollection);
    app.use("/api/weathersaves", weathersavesRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
