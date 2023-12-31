// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dragons">Dragons</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
