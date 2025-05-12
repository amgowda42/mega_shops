const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongo_db_uri = process.env.MONGO_DB_URI;
const mongoose = require("mongoose");

//middleware
app.use(express.json());

//imports
const Product = require("./models/product.model");

//get all products
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

//get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        statusCode: 404,
        success: false,
      });
    }
    res.status(200).json({
      product,
      message: "Product fetched successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//create product
app.post("/api/products", async (req, res) => {
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
      essage: error.message,
    });
  }
});

//update product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.json({
        message: "Product not found",
        statusCode: 404,
        success: false,
      });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json({
      updatedProduct,
      message: "Product Updated successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        statusCode: 404,
        success: false,
      });
    }
    res.status(200).json({
      message: "Product Deleted successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//connect to mongodb
mongoose
  .connect(mongo_db_uri)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    //start server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
  });
