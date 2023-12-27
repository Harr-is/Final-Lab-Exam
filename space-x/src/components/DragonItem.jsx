// components/DragonItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../stores/dragonSlice'; // Adjust the path accordingly

const DragonItem = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon(dragon.id));
  };

  const handleCancelReservation = () => {
    dispatch(cancelReservation(dragon.id));
  };

  return (
    <div>
      <h3>{dragon.name}</h3>
      <p>Type: {dragon.type}</p>
      <p>{dragon.description}</p>
      {dragon.reserved ? (
        <button onClick={handleCancelReservation}>Cancel Reservation</button>
      ) : (
        <button onClick={handleReserve}>Reserve</button>
      )}
      <hr />
    </div>
  );
};

export default DragonItem;
