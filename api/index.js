const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

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
