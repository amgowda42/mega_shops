const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongo_db_uri = process.env.MONGO_DB_URI;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get", (req, res) => {
  res.json({
    message: "Hello from the GET endpoint!",
    statusCode: 200,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(mongo_db_uri)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
  });
