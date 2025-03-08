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
      insertInitialProductData();
    }
  });
};



const insertInitialProductData = () => {
  
  const insertQuery = `
    INSERT INTO products (brand, model, price, cpu, ram, os, displayResolution, battery, cameras, dimensions, weight, image)
    VALUES
    ('Apple', 'iPhone 14', 999.99, 'A15 Bionic', '6GB', 'iOS', '2532 x 1170', '3200mAh', '12MP + 12MP', '146.7 x 71.5 x 7.8 mm', '174g', 'https://cdn.dxomark.com/wp-content/uploads/medias/post-121223/Apple-iPhone-14-Pro-Gold-Packshot-Front-Back.jpg'),
    ('Samsung', 'Galaxy S22', 799.99, 'Exynos 2200', '8GB', 'Android', '2400 x 1080', '4000mAh', '50MP + 12MP + 10MP', '151.7 x 71.2 x 7.6 mm', '167g', 'https://images.samsung.com/is/image/samsung/p6pim/es/2202/gallery/es-galaxy-s22-s901-412119-sm-s901bzgdphe-530041637?$650_519_PNG$'),
    ('OnePlus', '9 Pro', 1069.00, 'Snapdragon 888', '12GB', 'Android', '3216 x 1440', '4500mAh', '48MP + 50MP + 8MP', '163.2 x 73.6 x 8.7 mm', '197g', 'https://image01.oneplus.net/ebp/202103/26/1-m00-17-d3-rb8lb2btb-iaiaaaaaaaayq8mazge0868u2232.png'),
    ('Google', 'Pixel 7', 599.99, 'Google Tensor', '8GB', 'Android', '2400 x 1080', '4600mAh', '50MP + 12MP', '155.6 x 73.2 x 8.7 mm', '197g', 'https://store.google.com/GooglePixel7.jpg'),
    ('Xiaomi', 'Mi 11', 749.00, 'Snapdragon 888', '8GB', 'Android', '3200 x 1440', '4600mAh', '108MP + 13MP + 5MP', '164.3 x 74.6 x 8.1 mm', '196g', 'https://www.notebookcheck.net/fileadmin/_processed_/4/8/csm_Mi11_09_91bbcb3b97.png'),
    ('Sony', 'Xperia 1 III', 1299.99, 'Snapdragon 888', '12GB', 'Android', '3840 x 1644', '4500mAh', '12MP + 12MP + 12MP', '165 x 71 x 8.2 mm', '186g', 'https://m.media-amazon.com/images/I/61fDeyCzspL._AC_UF1000,1000_QL80_.jpg'),
    ('Huawei', 'P50 Pro', 1199.99, 'Kirin 9000', '8GB', 'Android', '2700 x 1224', '4360mAh', '50MP + 13MP + 64MP', '158.8 x 72.8 x 8.5 mm', '195g', 'https://www.notebookcheck.net/fileadmin/Notebooks/Huawei/P50_Pro/Huawei_P50_Pro_4zu3.jpg'),
    ('Realme', 'GT 2 Pro', 849.00, 'Snapdragon 8 Gen 1', '12GB', 'Android', '3216 x 1440', '5000mAh', '50MP + 50MP + 2MP', '164.3 x 75.6 x 8.2 mm', '199g', 'https://m.media-amazon.com/images/I/61Cp9WTwS5L.jpg'),
    ('Asus', 'ZenFone 8', 599.00, 'Snapdragon 888', '8GB', 'Android', '2400 x 1080', '4000mAh', '64MP + 12MP', '148.5 x 68.5 x 8.9 mm', '169g', 'https://www.asus.com/media/global/products/dpttpsp7e6qsjtyz/P_setting_xxx_0_90_end_500.png'),
    ('Vivo', 'X60 Pro', 999.00, 'Exynos 1080', '12GB', 'Android', '2400 x 1080', '4200mAh', '48MP + 13MP + 13MP', '158.6 x 73.2 x 7.6 mm', '190g', 'https://www.vivo.com/content/dam/vivo-global/product-asset/vivoglobal/X60pro/specs/x60_pro_bk.png')
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
