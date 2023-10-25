const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db');

db.run('CREATE TABLE IF NOT EXISTS scheduler_data(id INTEGER PRIMARY KEY, data TEXT)', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Table created.');
    db.close();
});
