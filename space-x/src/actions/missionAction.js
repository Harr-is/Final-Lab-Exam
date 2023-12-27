import * as types from './actionTypes';

// Action Creators for missions
export const joinMission = (missionId) => ({
  type: types.JOIN_MISSION,
  payload: { missionId },
});

export const leaveMission = (missionId) => ({
  type: types.LEAVE_MISSION,
  payload: { missionId },
});
