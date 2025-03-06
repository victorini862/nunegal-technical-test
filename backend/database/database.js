const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

const connectDb = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            console.log('Database initialized');
            resolve(db);
        });
    });
};

module.exports = { db, connectDb };
