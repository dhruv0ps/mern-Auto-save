// formActions.js
import axios from 'axios';
import {  AUTOSAVE_SUCCESS, AUTOSAVE_FAIL,UPDATE_FORM_DATA } from './types';
import setAuthToken from '../utils/setAuthToken';
// Update Form Data
export const updateFormData = (formData) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: formData
  };
};

// Autosave Form Data
export const autosaveForm = (formData) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
 
    try {
      
      const res = await axios.post('http://localhost:5000/api/save-form', formData);
      dispatch({
        type: AUTOSAVE_SUCCESS,
        payload: res.data // Optionally, you can pass any data received from the server
      });
    } catch (err) {
      dispatch({
        type: AUTOSAVE_FAIL,
        payload: err.response.data 
      });
    }
  };
