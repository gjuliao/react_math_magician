import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <Link className="nav_list" to="/">Home</Link>
      <Link className="nav_list" to="/quotes">Quotes</Link>
      <Link className="nav_list" to="/calculator">Calculator</Link>
    </ul>
  </nav>
);

export default Navbar;
