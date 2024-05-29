// Form.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, autosaveForm } from '../actions/formActions';

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form);

  useEffect(() => {
    const autosaveTimer = setTimeout(() => {
      dispatch(autosaveForm(formData));

    }, 5000); // Autosave every 5 seconds

    return () => clearTimeout(autosaveTimer); // Clear timer on component unmount
  }, [dispatch, formData]);

  const handleChange = e => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    console.log(updatedFormData); 
    dispatch(updateFormData(updatedFormData));
    
  };

  return (
    <div>
      <h2>Form</h2>
      <form>
        <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
        
      </form>
    </div>
  );
};

export default Form;

