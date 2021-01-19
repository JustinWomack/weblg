import { createAction, ActionType } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';
import Types from 'Types';

// Action Types
export enum types {
    OPEN = 'nav/OPEN',
    CLOSE = 'nav/CLOSE',
    TOGGLE = 'nav/TOGGLE',
}

// Reducer
export type State = DeepReadonly<{
    open: boolean;
}>;

const initialState: State = {
    open: false,
};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.OPEN:
            return { ...state, open: true };
        case types.CLOSE:
            return { ...state, open: false };
        case types.TOGGLE:
            return { ...state, open: !state.open };
    }

    return state;
};

// Action creators
export const actions = {
    open: createAction(types.OPEN),
    close: createAction(types.CLOSE),
    toggle: createAction(types.TOGGLE),
};

export type Action = ActionType<typeof actions>;

// Selectors
export const getOpen = ({ nav }: Types.RootState) =>
    nav.open;
