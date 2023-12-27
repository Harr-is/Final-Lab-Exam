// components/DragonList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../stores/dragonSlice'; // Adjust the path accordingly
import DragonItem from './DragonItem';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div>
      <h2>SpaceX Dragons</h2>
      {dragons.map((dragon) => (
        <DragonItem key={dragon.id} dragon={dragon} />
      ))}
    </div>
  );
};

export default DragonList;
