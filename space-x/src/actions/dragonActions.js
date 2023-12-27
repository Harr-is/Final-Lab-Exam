import * as types from './actionTypes';

// Action Creators for dragons
export const reserveDragon = (dragonId) => ({
  type: types.RESERVE_DRAGON,
  payload: { dragonId },
});

export const cancelDragonReservation = (dragonId) => ({
  type: types.CANCEL_DRAGON_RESERVATION,
  payload: { dragonId },
});
