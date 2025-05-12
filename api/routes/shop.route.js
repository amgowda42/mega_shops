const express = require("express");
const router = express.Router();

const {
  addShop,
  getAllShops,
  getShopById,
  updateShop,
  deleteShop,
} = require("../controllers/shop.controller");

router.get("/", getAllShops);
router.get("/:id", getShopById);
router.post("/", addShop);
router.put("/:id", updateShop);
router.delete("/:id", deleteShop);

module.exports = router;
