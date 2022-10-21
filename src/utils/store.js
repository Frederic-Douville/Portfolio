import { configureStore } from '@reduxjs/toolkit';
import dropDownMenuReducer from '../feature/dropDownMenu.js';

export default configureStore({
    reducer: {
        dropDownMenu: dropDownMenuReducer,
    },
});
