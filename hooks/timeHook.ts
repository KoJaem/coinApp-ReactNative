import {useDispatch, useSelector} from 'react-redux';
import {TypedUseSelectorHook} from 'react-redux';
import {TimeDispatch, TimeState} from '../store/timeStore';

export const useTimeDispatch = () => useDispatch<TimeDispatch>();
export const useTimeSelector: TypedUseSelectorHook<TimeState> = useSelector;
