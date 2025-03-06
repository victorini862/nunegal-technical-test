const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const { connectDb } = require('./database/database'); 
const { createProductTable, insertInitialProductData, deleteAllProducts } = require('./src/models/productModel');
const { createCartTable } = require('./src/models/cartModel');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
    });
    next();
});

app.use('/api', routes);

createProductTable();
createCartTable();
deleteAllProducts();
insertInitialProductData(); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
