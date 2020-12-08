import { combineReducers } from 'redux';
import counter, { Action as CounterAction } from '../features/counter/duck';

export default combineReducers({
    counter,
});

// export type Action = CounterAction & NavAction;
