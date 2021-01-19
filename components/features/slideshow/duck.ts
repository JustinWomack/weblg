import { createAction, ActionType } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';
import Types from 'Types';

// Action Types
export enum types {
    INCREMENT = 'counter/INCREMENT',
    DECREMENT = 'counter/INCREMENT',
    SET = 'counter/SET',
}

// Reducer
export type State = DeepReadonly<{
    position: number;
}>;

const initialState: State = {
    position: 0,
};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, position: state.position + 1 };
        case types.DECREMENT:
            return { ...state, position: state.position - 1 };
        case types.SET:
            return { ...state, position: action.payload };
    }

    return state;
};

// Action creators
export const actions = {
    increment: createAction(types.INCREMENT),
    decrement: createAction(types.DECREMENT),
    setPosition: createAction(types.SET, (action) => {
        return (position: number) => action(position)
    }),
};

export type Action = ActionType<typeof actions>;

// Selectors
export const getPosition = ({ slideshow }: Types.RootState) =>
    slideshow.position;
