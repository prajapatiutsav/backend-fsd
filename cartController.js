const Cart = require("../models/Cart");

exports.addToCart = async (req, res, next) => {
  try {
    const item = await Cart.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

