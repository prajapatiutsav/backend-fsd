const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config();

connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Laptop",
        price: 50000,
        description: "Gaming laptop",
        stock: 10,
      },
      {
        name: "Phone",
        price: 20000,
        description: "Android phone",
        stock: 20,
      },
    ]);

    console.log("Products inserted!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
