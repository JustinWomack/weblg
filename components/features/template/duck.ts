import { createAction, ActionType } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';
import Types from 'Types';

// Action Types
export enum types {
    INCREMENT = 'counter/INCREMENT',
}

// Reducer
export type State = DeepReadonly<{
    value: number;
}>;

const initialState: State = {
    value: 0,
};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, value: state.value + 1 };
    }

    return state;
};

// Action creators
export const actions = {
    increment: createAction(types.INCREMENT),
};

export type Action = ActionType<typeof actions>;

// Selectors
export const getCounter = ({ nav }: Types.RootState) =>
    nav.value;
