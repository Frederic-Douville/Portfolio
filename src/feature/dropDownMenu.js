import { createAction, createReducer } from '@reduxjs/toolkit';
import { selectDropDownMenu } from '../utils/selector';

const initialState = {
    dropDownMenuState: false,
};

export const dropDownMenuClosing = createAction('dropDownMenu/closing');
export const dropDownMenuChanging = createAction('dropDownMenu/changing');

export function unfocusPage(store) {
    const status = selectDropDownMenu(store.getState()).dropDownMenuState;
    const unfocusPages = document.getElementsByClassName('unfocus');
    return status === true
        ? Array.prototype.forEach.call(
              unfocusPages,
              (el) => (el.style.zIndex = '-1')
          )
        : Array.prototype.forEach.call(
              unfocusPages,
              (el) => (el.style.zIndex = '1')
          );
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(dropDownMenuClosing, (draft) => {
            draft.dropDownMenuState = false;
            return;
        })
        .addCase(dropDownMenuChanging, (draft) => {
            draft.dropDownMenuState = !draft.dropDownMenuState;
            return;
        })
);
