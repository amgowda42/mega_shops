const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongo_db_uri = process.env.MONGO_DB_URI;
const mongoose = require("mongoose");

app.use(express.json());

const Product = require("./models/product.model");

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      products,
      message: "Products fetched successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/create", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      product,
      message: "Product created successfully",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error,
    });
  }
});

mongoose
  .connect(mongo_db_uri)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
  });
