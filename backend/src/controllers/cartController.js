const cartModel = require('../models/cartModel');
const addToCart = (req, res) => {
  const { product_id, colorCode, storageCode, quantity = 1 } = req.body;

  if (!product_id || !colorCode || !storageCode) {
    return res.status(400).json({ success: false, message: "Faltan datos en la petición." });
  }

  cartModel.addToCart(product_id, colorCode, storageCode, quantity);

  cartModel.getCartItems((err, items) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Error al obtener el carrito actualizado." });
    }
    res.json({ success: true, message: "Producto añadido al carrito.", cart: items });
  });
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
