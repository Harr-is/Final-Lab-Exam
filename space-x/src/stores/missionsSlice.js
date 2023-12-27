// stores/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch missions from SpaceX API
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    console.error('Error fetching missions:', error);
    throw error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
