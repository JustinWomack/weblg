import { StateType } from 'typesafe-actions';
import rootReducer from '../ducks';
import { Action as SlideshowAction } from '../features/slideshow/duck';

declare module 'Types' {
    export type RootState = StateType<typeof rootReducer>;
    export type RootAction = SlideshowAction // & NavAction
  }
  