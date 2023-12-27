import * as types from '../actions/actionTypes';

const initialState = {
  dragons: [],
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESERVE_DRAGON:
      const reservedDragonId = action.payload.dragonId;
      const updatedDragons = state.dragons.map((dragon) =>
        dragon.id === reservedDragonId ? { ...dragon, reserved: true } : dragon
      );
      return { ...state, dragons: updatedDragons };

    case types.CANCEL_DRAGON_RESERVATION:
      const canceledDragonId = action.payload.dragonId;
      const dragonsAfterCancel = state.dragons.map((dragon) =>
        dragon.id === canceledDragonId ? { ...dragon, reserved: false } : dragon
      );
      return { ...state, dragons: dragonsAfterCancel };

    default:
      return state;
  }
};

export default dragonReducer;
