const db = require('../../database/database.js');

const createCartTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS cart (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER,
      colorCode INTEGER,
      storageCode INTEGER,
      quantity INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id)
    )
  `;
  
  db.run(sql, (err) => {
    if (err) {
      console.error("Error creating cart table:", err.message);
    } else {
      console.log('Table "cart" ensured.');
    }
  });
};

const addToCart = (productId, colorCode, storageCode, quantity = 1) => {
  const sql = `
    INSERT INTO cart (product_id, colorCode, storageCode, quantity)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [productId, colorCode, storageCode, quantity], function (err) {
    if (err) {
      console.error("Error adding product to cart:", err.message);
    } else {
      console.log(`Product ${productId} added to cart.`);
    }
  });
};

const getCartItems = (callback) => {
  const sql = `
    SELECT c.id, p.id AS product_id, p.brand, p.model, p.price, c.colorCode, c.storageCode, c.quantity
    FROM cart c
    JOIN products p ON c.product_id = p.id
  `;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

module.exports = {
  createCartTable,
  addToCart,
  getCartItems
};