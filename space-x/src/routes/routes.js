// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom'; // Rename Routes to ReactRoutes
import NavigationBar from '../components/NavigationBar'; // Adjust the path accordingly
import DragonsPage from '../components/DragonsPage';
import MissionsPage from '../components/MissionsPage';
import ProfilePage from '../components/ProfilePage';

const Routes = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <ReactRoutes> {/* Rename Routes to ReactRoutes */}
          <Route path="/dragons" element={<DragonsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </ReactRoutes>
      </div>
    </Router>
  );
};

export default Routes;
