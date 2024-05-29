// reducers/authReducer.js
import { SET_CURRENT_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length > 0,
        user: action.payload,
        error: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      };
    default:
      return state;
  }
}
