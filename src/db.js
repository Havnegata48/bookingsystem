const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('bookings.db', (err) => {
  if (err) {
    console.error('Feil ved åpning av databasen:', err.message);
  } else {
    console.log('Databasen er åpnet.');
    db.run(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        start TEXT,
        end TEXT
      )
    `);
  }
});

// Legg til en booking i databasen
function addBooking(booking, callback) {
  const query = `
    INSERT INTO bookings (title, start, end)
    VALUES (?, ?, ?)
  `;
  const values = [booking.title, booking.start, booking.end];
  db.run(query, values, (err) => {
    if (err) {
      console.error('Feil ved lagring av booking:', err.message);
      callback(false);
    } else {
      console.log('Booking lagret.');
      callback(true);
    }
  });
}

module.exports = {
  addBooking,
};
