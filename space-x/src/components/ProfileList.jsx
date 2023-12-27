// components/ProfileList.js
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedDragons = useSelector((state) => state.dragons.filter((dragon) => dragon.reserved));
  const reservedMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));

  return (
    <div>
      <h2>Reserved Dragons</h2>
      <ul>
        {reservedDragons.map((dragon) => (
          <li key={dragon.id}>{dragon.name}</li>
        ))}
      </ul>

      <h2>Joined Missions</h2>
      <ul>
        {reservedMissions.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
