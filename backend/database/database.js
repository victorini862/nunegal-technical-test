const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.join(__dirname, "database.sqlite"),
  (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database.");
    }
  }
);


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
            weight TEXT
        )
    `;
  db.run(sql, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log('Table "products" ensured.');

    //   deleteAllProducts(); // Uncomment this line to delete the data and insert the initial data.
      insertInitialData(); 
    }
  });
};

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
  

const deleteAllProducts = () => {
    const sql = `DELETE FROM products`;

    db.run(sql, (err) => {
        if (err) {
            console.error('Error deleting products:', err.message);
        } else {
            console.log('All products deleted.');
        }
    });
};

const insertInitialData = () => {
  const checkTableQuery = "SELECT COUNT(*) AS count FROM products";

  db.get(checkTableQuery, (err, row) => {
    if (err) {
      console.error("Error checking products table:", err.message);
      return;
    }

    if (row.count === 0) {
      const insertQuery = `
                INSERT INTO products (brand, model, price, cpu, ram, os, displayResolution, battery, cameras, dimensions, weight)
                VALUES
                ('Apple', 'iPhone 14', 999.99, 'A15 Bionic', '6GB', 'iOS', '2532 x 1170', '3200mAh', '12MP + 12MP', '146.7 x 71.5 x 7.8 mm', '174g'),
                ('Samsung', 'Galaxy S22', 799.99, 'Exynos 2200', '8GB', 'Android', '2400 x 1080', '4000mAh', '50MP + 12MP + 10MP', '151.7 x 71.2 x 7.6 mm', '167g'),
                ('OnePlus', '9 Pro', 1069.00, 'Snapdragon 888', '12GB', 'Android', '3216 x 1440', '4500mAh', '48MP + 50MP + 8MP', '163.2 x 73.6 x 8.7 mm', '197g'),
                ('Google', 'Pixel 7', 599.99, 'Google Tensor', '8GB', 'Android', '2400 x 1080', '4600mAh', '50MP + 12MP', '155.6 x 73.2 x 8.7 mm', '197g'),
                ('Xiaomi', 'Mi 11', 749.00, 'Snapdragon 888', '8GB', 'Android', '3200 x 1440', '4600mAh', '108MP + 13MP + 5MP', '164.3 x 74.6 x 8.1 mm', '196g'),
                ('Sony', 'Xperia 1 III', 1299.99, 'Snapdragon 888', '12GB', 'Android', '3840 x 1644', '4500mAh', '12MP + 12MP + 12MP', '165 x 71 x 8.2 mm', '186g'),
                ('Oppo', 'Find X3 Pro', 1149.00, 'Snapdragon 888', '12GB', 'Android', '3216 x 1440', '4500mAh', '50MP + 13MP + 50MP', '163.6 x 74 x 8.3 mm', '193g'),
                ('Huawei', 'P50 Pro', 1199.99, 'Kirin 9000', '8GB', 'Android', '2700 x 1224', '4360mAh', '50MP + 13MP + 64MP', '158.8 x 72.8 x 8.5 mm', '195g'),
                ('Motorola', 'Edge 20 Pro', 899.99, 'Snapdragon 870', '12GB', 'Android', '2400 x 1080', '4500mAh', '108MP + 8MP + 16MP', '163 x 76 x 8 mm', '190g'),
                ('Realme', 'GT 2 Pro', 849.00, 'Snapdragon 8 Gen 1', '12GB', 'Android', '3216 x 1440', '5000mAh', '50MP + 50MP + 2MP', '164.3 x 75.6 x 8.2 mm', '199g'),
                ('Asus', 'ZenFone 8', 599.00, 'Snapdragon 888', '8GB', 'Android', '2400 x 1080', '4000mAh', '64MP + 12MP', '148.5 x 68.5 x 8.9 mm', '169g'),
                ('Nokia', 'X20', 399.99, 'Snapdragon 480', '6GB', 'Android', '2400 x 1080', '4470mAh', '64MP + 5MP + 2MP', '168.9 x 79.7 x 9.1 mm', '220g'),
                ('LG', 'V60 ThinQ', 799.00, 'Snapdragon 865', '8GB', 'Android', '2460 x 1080', '5000mAh', '64MP + 13MP + 0.3MP', '169.3 x 77.6 x 9.1 mm', '219g'),
                ('ZTE', 'Axon 20', 449.00, 'Snapdragon 765G', '8GB', 'Android', '2460 x 1080', '4000mAh', '64MP + 8MP + 2MP', '164.3 x 75.1 x 8 mm', '200g'),
                ('Vivo', 'X60 Pro', 999.00, 'Exynos 1080', '12GB', 'Android', '2400 x 1080', '4200mAh', '48MP + 13MP + 13MP', '158.6 x 73.2 x 7.6 mm', '190g'),
                ('TCL', '10 5G', 399.00, 'Snapdragon 765G', '6GB', 'Android', '2340 x 1080', '4500mAh', '64MP + 8MP + 5MP', '167.4 x 76.9 x 9 mm', '210g'),
                ('Alcatel', '1S 2021', 129.99, 'Unisoc SC9863A', '3GB', 'Android', '1600 x 720', '4000mAh', '13MP + 2MP', '164.2 x 75.6 x 9.1 mm', '205g'),
                ('Lenovo', 'Legion Phone Duel 2', 999.00, 'Snapdragon 888', '16GB', 'Android', '2460 x 1080', '5500mAh', '64MP + 16MP', '177.9 x 78.5 x 9.9 mm', '259g'),
                ('Infinix', 'Zero X Pro', 249.99, 'Helio G95', '8GB', 'Android', '2400 x 1080', '4500mAh', '64MP + 13MP + 8MP', '163.5 x 75.1 x 8.5 mm', '193g'),
                ('Tecno', 'Phantom X', 549.99, 'Helio G95', '8GB', 'Android', '2400 x 1080', '4700mAh', '50MP + 13MP + 8MP', '164.3 x 73.9 x 8.6 mm', '200g'),
                ('BlackBerry', 'Key2', 649.00, 'Snapdragon 660', '6GB', 'Android', '1620 x 1080', '3500mAh', '12MP + 8MP', '151.4 x 71.8 x 8.5 mm', '168g');
            `;

      db.run(insertQuery, (err) => {
        if (err) {
          console.error("Error inserting initial data:", err.message);
        } else {
          console.log("Initial data inserted.");
        }
      });
    } else {
      console.log("Products table already has data.");
    }
  });
};


const addToCart = (productId, colorCode, storageCode) => {
    const sql = `
      INSERT INTO cart (product_id, colorCode, storageCode)
      VALUES (?, ?, ?)
    `;
    
    db.run(sql, [productId, colorCode, storageCode], function(err) {
      if (err) {
        console.error("Error adding product to cart:", err.message);
      } else {
        console.log(`Product ${productId} added to cart with colorCode ${colorCode} and storageCode ${storageCode}`);
      }
    });
  };
  

const connectDb = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      console.log("Database initialized");
      resolve(db);
    });
  });
};

module.exports = { db, connectDb, createProductTable, createCartTable };
