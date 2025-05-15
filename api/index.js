const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/product.route");
const shopRoutes = require("./routes/shop.route");

//initializations
const app = express();

//configurations
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongo_db_uri = process.env.MONGO_DB_URI;

//cors
app.use(
  cors({
    origin: "http://localhost:5173", // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//middleware
app.use(express.json());

//routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/shops", shopRoutes);

//connecting to MongoDB
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
