import {createSlice} from '@reduxjs/toolkit';
import {printDate} from '../utils/formatDate';
export type time = {
  time: Date;
};
export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    time: printDate(new Date()),
  },
  reducers: {
    refresh: state => {
      state.time = printDate(new Date());
    },
    // refreshByTime: (state, action) => {
    //   state.time = action.payload.data;
    // },
  },
});

export const {refresh} = timerSlice.actions;

export default timerSlice.reducer;
