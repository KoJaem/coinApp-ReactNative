import {createSlice} from '@reduxjs/toolkit';
export type time = {
  time: Date;
};
export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    time: new Date(),
  },
  reducers: {
    refresh: state => {
      state.time = new Date();
    },
    // refreshByTime: (state, action) => {
    //   state.time = action.payload.data;
    // },
  },
});

export const {refresh} = timerSlice.actions;

export default timerSlice.reducer;
