import React, { useState } from 'react';
import BookingGrid from './BookingGrid';
import BookingForm from './BookingForm';
import './App.css';
import brregLogo from './logos/brreg.png';
import digdirLogo from './logos/digdir.png';

function App() {
  const [bookings, setBookings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
    setShowForm(false);
  };

  return (
    <div className="App">
      <div className="navbar">
        <h1 className="navbar-title">Booking for rom H48</h1>
        <div className={`menu-toggle ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="body">
        <div className={`menu ${showMenu ? 'open' : ''}`}>
          <div className="menu-header">
            <button className="close-menu-button" onClick={closeMenu}>
              &#10005; {/* Kryss-symbol */}
            </button>
          </div>
          <ul>
            <li><a href="https://havnegata48.no/" className="menu-link">Gå hjem til Havnegata 48</a></li>
          </ul>
        </div>
        <BookingGrid bookings={bookings} />
        <button className="reservation-button" onClick={() => setShowForm(!showForm)}>Reserver rommet</button>
        {showForm && <BookingForm addBooking={addBooking} />}
      </div>
      <footer className="footer">
        <div className="footer-info">
          <div className="footer-logo">
            <img src={brregLogo} width="300px" alt="Brønnøysundregistrene" />
          </div>
          <div className="footer-text">
            Organisasjonsnummer: 974 760 673
            <br />
            <a href="https://www.brreg.no">www.brreg.no</a>
          </div>
        </div>
        <div className="footer-info">
        <div className="footer-text">
            Organisasjonsnummer: 991 825 827
            <br />
            <a href="https://www.digdir.no">www.digdir.no</a>
          </div>
          <div className="footer-logo">
            <img src={digdirLogo} width="150px" alt="Digitaliseringsdirektoratet" />
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
