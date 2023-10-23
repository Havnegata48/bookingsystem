// localStorage.js
const BOOKINGS_KEY = 'bookings';

export const saveBooking = (booking) => {
  let bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
};

export const getBookings = () => {
  const bookingsJSON = localStorage.getItem(BOOKINGS_KEY);
  return bookingsJSON ? JSON.parse(bookingsJSON) : [];
};
