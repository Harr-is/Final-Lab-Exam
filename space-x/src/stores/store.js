// src/stores/store.js
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragonSlice';
import missionsReducer from './missionsSlice'; 

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

export default store;
