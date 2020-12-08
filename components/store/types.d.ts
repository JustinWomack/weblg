import { StateType } from 'typesafe-actions';
import rootReducer from '../ducks';
import { Action as CounterAction } from '../features/counter/duck';

declare module 'Types' {
    export type RootState = StateType<typeof rootReducer>;
    export type RootAction = CounterAction // & NavAction
  }
  