const Shop = require("../models/shop.model");

//get all shops
exports.getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    if (!shops) {
      return res.status(404).json({
        message: "No shops found",
        statusCode: 404,
        success: false,
      });
    }
    res.status(200).json({
      shops,
      statusCode: 200,
      message: "Shops fetched successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get single shop
exports.getShopById = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findById(id);
    if (!shop) {
      return res.status(404).json({
        message: "Shop not found",
        statusCode: 404,
        success: false,
      });
    }
    res.status(200).json({
      shop,
      message: "Shop fetched successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//add shop
exports.addShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(201).json({
      shop,
      message: "Shop created successfully",
      statusCode: 201,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//update shop
exports.updateShop = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByIdAndUpdate(id, req.body);
    if (!shop) {
      return res.status(404).json({
        message: "Shop not found",
        statusCode: 404,
        success: false,
      });
    }
    const updatedShop = await Shop.findById(id);
    res.status(200).json({
      updatedShop,
      message: "Shop updated successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete shop
exports.deleteShop = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByIdAndDelete(id);
    if (!shop) {
      return res.status(404).json({
        message: "Shop not found",
        statusCode: 404,
        success: false,
      });
    }
    res.status(200).json({
      message: "Shop deleted successfully",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
