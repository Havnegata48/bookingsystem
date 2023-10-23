// BookingGrid.js
import React from 'react';
import { getBookings } from './localStorage';

function BookingGrid() {
  const bookings = getBookings();

  return (
    <div className="BookingGrid">
      <h2>Kommende bookinger</h2>
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Tidspunkt</th>
            <th>Navn</th>
            <th>Email</th>
            <th>Organisasjon</th>
            <th>Utstyr</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.organization}</td>
              <td>{booking.equipment.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingGrid;
