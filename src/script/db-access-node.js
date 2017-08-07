var fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Open the database
let db = new sqlite3.Database('../db/homeschool.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Connected to the database...');
});

db.serialize(() => {
    db.run('INSERT INTO table1 (one, two) VALUES ('test', '1');')
});

// Close the database
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
});