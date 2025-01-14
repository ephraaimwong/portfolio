import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ isAdhocNavbar}) => {
  // If it's an adhoc navbar and not visible, return null
  // if (isAdhocNavbar && !isVisible) {
  //   return null;
  // }

  return (
    <nav className={`navbar ${isAdhocNavbar ? 'adhoc-navbar' : ''}`}>
      <div className="navbar-links">
        <a className="nav-logo">Ephraim J. Wong | 王恩荣</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Socials</a></li>
        </ul>
        {/* Close button for adhoc navbar
        {isAdhocNavbar && (
          <button onClick={onClose} className="close-button">
            Close
          </button>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;