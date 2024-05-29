// authActions.js
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { SET_CURRENT_USER, AUTH_ERROR } from './types';

// Register User
export const registerUser = (formData) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/users', formData);

    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });

    console.log("succesfully registerd") // Redirect to dashboard after successful registration
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data
    });
  }
};

// Login User
export const loginUser = (formData,) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth', formData);

    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });

   
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data
    });

  }
};

// Logout User
export const logout = () => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(false);
  dispatch({ type: SET_CURRENT_USER, payload: {} });
};

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data
    });
  }
};
