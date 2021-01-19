import { combineReducers } from 'redux';
import slideshow, { Action as SlideshowAction } from '../features/slideshow/duck';
import nav, { Action as NavAction } from '../features/navbar/duck';
import contactDialog, { Action as ContactDialogAction } from '../features/contactDialog/duck';

export default combineReducers({
    slideshow,
    nav,
    contactDialog,
});

// export type Action = CounterAction & NavAction;
