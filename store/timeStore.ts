import {configureStore} from '@reduxjs/toolkit';
import timerReducer from '../reducer/timerReducer';

const timeStore = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default timeStore;

export type TimeState = ReturnType<typeof timeStore.getState>;
export type TimeDispatch = typeof timeStore.dispatch;
