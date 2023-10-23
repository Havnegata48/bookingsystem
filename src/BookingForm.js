// BookingForm.js
import React, { useState } from 'react';
import { saveBooking } from './localStorage';

function BookingForm({ addBooking }) {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    organization: 'DigDir',
    equipment: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    const updatedEquipment = checked
      ? [...bookingData.equipment, name]
      : bookingData.equipment.filter((item) => item !== name);
    setBookingData({ ...bookingData, equipment: updatedEquipment });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newBooking = { ...bookingData, id };
    saveBooking(newBooking); // Lagre booking i localStorage
    addBooking(newBooking);
    setBookingData({
      date: '',
      time: '',
      name: '',
      email: '',
      organization: 'DigDir',
      equipment: [],
    });
  };

  return (
    <div className="BookingForm">
      <h2>Reserver rommet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Dato:
          <input
            type="text"
            name="date"
            placeholder="dd/mm/yyyy"
            value={bookingData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Tidspunkt:
          <input
            type="text"
            name="time"
            placeholder="hh:mm"
            value={bookingData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Navn:
          <input
            type="text"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={bookingData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Organisasjon:
          <div>
            <label>
              <input
                type="radio"
                name="organization"
                value="DigDir"
                checked={bookingData.organization === 'DigDir'}
                onChange={handleChange}
              />
              DigDir
            </label>
            <label>
              <input
                type="radio"
                name="organization"
                value="BRREG"
                checked={bookingData.organization === 'BRREG'}
                onChange={handleChange}
              />
              BRREG
            </label>
          </div>
        </label>
        <label>
          Utstyr:
          <div>
            <label>
              <input
                type="checkbox"
                name="3D-printer"
                checked={bookingData.equipment.includes('3D-printer')}
                onChange={handleEquipmentChange}
              />
              3D-printer
            </label>
            <label>
              <input
                type="checkbox"
                name="PS5"
                checked={bookingData.equipment.includes('PS5')}
                onChange={handleEquipmentChange}
              />
              PS5
            </label>
          </div>
        </label>
        <button type="submit">Bekreft booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
