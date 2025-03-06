const { db } = require('../../database/database');

const createTable = () => {
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
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table "products" ensured.');
        }
    });
};

module.exports = { createTable };
