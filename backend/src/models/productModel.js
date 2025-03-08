const db = require("../../database/database.js");

const createProductTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brand TEXT,
      model TEXT,
      price REAL,
      cpu TEXT,
      ram TEXT,
      os TEXT,
      displayResolution TEXT,
      battery TEXT,
      cameras TEXT,
      dimensions TEXT,
      weight TEXT,
      image TEXT
    )
  `;

  db.run(sql, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log('Table "products" ensured.');
      deleteAllProducts();
    }
  });
};

const deleteAllProducts = () => {
  console.log("Deleting all products...");
  
  const sql = `DELETE FROM products`;

  db.run(sql, (err) => {
    if (err) {
      console.error("Error deleting products:", err.message);
    } else {
      console.log("All products deleted.");
      db.run(`DELETE FROM sqlite_sequence WHERE name='products'`, (err) => {
        if (err) {
          console.error("Error resetting autoincrement:", err.message);
        } else {
          console.log("Autoincrement ID reset.");
        }
        insertInitialProductData();
      });
      insertInitialProductData();
    }
  });
};



const insertInitialProductData = () => {
  
  const insertQuery = `
    INSERT INTO products (brand, model, price, cpu, ram, os, displayResolution, battery, cameras, dimensions, weight, image)
    VALUES
    ('Apple', 'iPhone 14', 999.99, 'A15 Bionic', '6GB', 'iOS', '2532 x 1170', '3200mAh', '12MP + 12MP', '146.7 x 71.5 x 7.8 mm', '174g', 'https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg'),
    ('Samsung', 'Galaxy S22', 799.99, 'Exynos 2200', '8GB', 'Android', '2400 x 1080', '4000mAh', '50MP + 12MP + 10MP', '151.7 x 71.2 x 7.6 mm', '167g', 'https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s22/galaxy-s22-pink-gold.jpg'),
    ('OnePlus', '9 Pro', 1069.00, 'Snapdragon 888', '12GB', 'Android', '3216 x 1440', '4500mAh', '48MP + 50MP + 8MP', '163.2 x 73.6 x 8.7 mm', '197g', 'https://m.media-amazon.com/images/I/61nuYbMJamS.jpg'),
    ('Google', 'Pixel 7', 599.99, 'Google Tensor', '8GB', 'Android', '2400 x 1080', '4600mAh', '50MP + 12MP', '155.6 x 73.2 x 8.7 mm', '197g', 'https://img.pccomponentes.com/articles/1079/10791178/1259-google-pixel-7-8-128gb-negro-obsidiana-libre.jpg'),
    ('Xiaomi', 'Mi 11', 749.00, 'Snapdragon 888', '8GB', 'Android', '3200 x 1440', '4600mAh', '108MP + 13MP + 5MP', '164.3 x 74.6 x 8.1 mm', '196g', 'https://img.pccomponentes.com/articles/40/408856/1882-xiaomi-mi-11-lite-5g-8-128gb-verde-libre.jpg'),
    ('Sony', 'Xperia 1 III', 1299.99, 'Snapdragon 888', '12GB', 'Android', '3840 x 1644', '4500mAh', '12MP + 12MP + 12MP', '165 x 71 x 8.2 mm', '186g', 'https://images.mobilefun.co.uk/graphics/450pixelp/84454.jpg'),
    ('Huawei', 'P50 Pro', 1199.99, 'Kirin 9000', '8GB', 'Android', '2700 x 1224', '4360mAh', '50MP + 13MP + 64MP', '158.8 x 72.8 x 8.5 mm', '195g', 'https://m.media-amazon.com/images/I/51PwSiuTOQL._AC_UF894,1000_QL80_.jpg'),
    ('Realme', 'GT 2 Pro', 849.00, 'Snapdragon 8 Gen 1', '12GB', 'Android', '3216 x 1440', '5000mAh', '50MP + 50MP + 2MP', '164.3 x 75.6 x 8.2 mm', '199g', 'https://movimur.com/server/Portal_0038550_0045927/img/products/realme-gt3-5g-16gb1tb-lila_12109900_26020855.jpg'),
    ('Asus', 'ZenFone 8', 599.00, 'Snapdragon 888', '8GB', 'Android', '2400 x 1080', '4000mAh', '64MP + 12MP', '148.5 x 68.5 x 8.9 mm', '169g', 'https://m.media-amazon.com/images/I/4194KmfMuvL.jpg'),
    ('Vivo', 'X60 Pro', 999.00, 'Exynos 1080', '12GB', 'Android', '2400 x 1080', '4200mAh', '48MP + 13MP + 13MP', '158.6 x 73.2 x 7.6 mm', '190g', 'https://img.pccomponentes.com/articles/40/408771/1401-vivo-x60-pro-5g-12-256gb-negro-libre.jpg')
  `;

  db.run(insertQuery, (err) => {
    if (err) {
      console.error("Error inserting initial data:", err.message);
    } else {
      console.log("Initial example data inserted.");
    }
  });
};

const getAllProducts = (callback) => {
  const sql = "SELECT * FROM products";
  db.all(sql, [], (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

module.exports = {
  createProductTable,
  deleteAllProducts,
  insertInitialProductData,
  getAllProducts,
};
