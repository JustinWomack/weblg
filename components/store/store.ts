import { createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../ducks';

export const createStore = (state: any) => {
    return createReduxStore(
        reducer,
        state,
        composeWithDevTools()
    );
};
