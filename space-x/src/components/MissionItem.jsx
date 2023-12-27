// components/MissionItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../stores/missionsSlice';


const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(mission.id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(mission.id));
  };

  return (
    <div>
      <h3>{mission.name}</h3>
      <p>Description: {mission.description}</p>
      {mission.joined ? (
        <button onClick={handleLeaveMission}>Leave Mission</button>
      ) : (
        <button onClick={handleJoinMission}>Join Mission</button>
      )}
      <hr />
    </div>
  );
};

export default MissionItem;
