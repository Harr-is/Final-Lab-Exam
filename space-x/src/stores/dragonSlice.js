// redux/slices/dragonsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch dragons from SpaceX API
export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/dragons');
    return response.data;
  } catch (error) {
    console.error('Error fetching dragons:', error);
    throw error;
  }
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    // Add other synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
