const cartModel = require('../models/cartModel');

const addToCart = (req, res) => {
  const { productId, colorCode, storageCode, quantity } = req.body;
  
  cartModel.addToCart(productId, colorCode, storageCode, quantity);
  res.status(200).send("Product added to cart");
};

const getCart = (req, res) => {
  cartModel.getCartItems((err, items) => {
    if (err) {
      res.status(500).send("Error retrieving cart items");
    } else {
      res.json(items);
    }
  });
};

module.exports = {
  addToCart,
  getCart
};
