const Product = require("../models/product.model");

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({
        message: "No products found",
        statusCode: 404,
        success: false,
      });
    }
    res.status(200).json({
      products,
      statusCode: 200,
      message: "Products fetched successfully",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      essage: error.message,
    });
  }
};

//get single product
exports.getProductById = async (req, res) => {
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
};

//create product
exports.createProduct = async (req, res) => {
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
      message: error.message,
    });
  }
};

//update product
exports.updateProduct = async (req, res) => {
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
};

//delete product
exports.deleteProduct = async (req, res) => {
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
};
