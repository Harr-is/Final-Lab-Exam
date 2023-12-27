// components/MissionsList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../stores/missionsSlice';
import MissionItem from './MissionItem';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <h2>SpaceX Missions</h2>
      {missions.map((mission) => (
        <MissionItem key={mission.id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionsList;
