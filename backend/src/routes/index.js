const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');

router.get('/products', productController.getProducts);

router.get('/product/:id', productController.getProductById);

router.post('/cart', cartController.addToCart);

module.exports = router;