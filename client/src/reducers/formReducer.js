// reducers/formReducer.js
import { AUTOSAVE_SUCCESS, AUTOSAVE_FAIL, UPDATE_FORM_DATA } from '../actions/types';

const initialState = {
  field1: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    case AUTOSAVE_SUCCESS:
      return {
        ...state,
        autosaveSuccess: true,
        autosaveError: null
      };
    case AUTOSAVE_FAIL:
      return {
        ...state,
        autosaveSuccess: false,
        autosaveError: action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
