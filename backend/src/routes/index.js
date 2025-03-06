const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

router.get('/products', getProducts);
router.get('/product/:id', getProducts);
router.post('/cart', getProducts);

module.exports = router;
