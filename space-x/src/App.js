// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar';
import MissionsPage from './components/MissionsPage';
import DragonsPage from './components/DragonsPage';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/dragons" element={<DragonsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
