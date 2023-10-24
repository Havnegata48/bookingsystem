// App.js
import React, { useState } from 'react';
import BookingSchedule from './BookingSchedule'; // Importer BookingSchedule
import './App.css';
import fellesLogo from './logos/felleslogo.png';
import { FaGithub, FaBuilding } from 'react-icons/fa';

function App() {
  const [bookings, setBookings] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="App">
      <div className="navbar">
        <h1 className="navbar-title">Bookingside for H48</h1>
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
            <li><a href="https://havnegata48.no/" className="menu-link"><FaBuilding /> Havnegata 48</a></li>
            <li><a href="https://github.com/Havnegata48" className="menu-link"><FaGithub /> GitHub</a></li>
          </ul>
        </div>
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <BookingSchedule bookings={bookings} /> {/* Inkluder BookingSchedule */}
      </div>
      <footer className="footer">
      <div className="footer-info">
        <div className="footer-text">
            Utviklet for
            <br />
            Digitaliseringsdirektoratet og
            <br />
            Brønnøysundregistrene
          </div>
          <div className="footer-logo">
            <img src={fellesLogo} width="150px" alt="Brreg x DigDir" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
