// Auth/Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/authActions';
import Navbar from './Navbar';

const Signup = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(formData, history));
  };

  return (
    <div>
      {/* <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} required />
        <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
        <button type="submit">Sign Up</button>
      </form> */}
      <Navbar/>
      <div className="container px-4 py-5 mx-auto">
  <div className="card card0">
    <div className="d-flex flex-lg-row flex-column-reverse">
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-md-8 col-10 my-5">
            <div className="row justify-content-center px-3 mb-3">
              <img id="logo" src="https://i.imgur.com/PSXxjNY.png" />
            </div>
            <h3 className="mb-5 text-center heading">We are AutoSave</h3>
            <h6 className="msg-info">Please sign up for a new account</h6>
            <div className="form-group">
              <label className="form-control-label text-muted">Username</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                value={name} onChange={onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-muted">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={email} onChange={onChange} 
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-muted">Password</label>
              <input
                type="password"
                id="psw"
                name="psw"
                placeholder="Password"
                className="form-control"
                value={password} onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-muted">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_psw"
                name="confirm_psw"
                placeholder="Confirm Password"
                className="form-control"
               onChange={onChange}
              />
            </div>
            <div className="row justify-content-center my-3 px-3">
              <button className="btn-block btn-color">Sign Up for AutoSave</button>
            </div>
            <div className="row justify-content-center my-2">
              <a href="#">
                <small className="text-muted">
                  Already have an account? Login
                </small>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom text-center mb-5">
          <p href="#" className="sm-text mx-auto mb-3">
            Don't have an account?
            <button className="btn btn-white ml-2">Create new</button>
          </p>
        </div>
      </div>
      <div className="card card2">
        <div className="my-auto mx-md-5 px-md-5 right">
          <h3 className="text-white">We are more than just a company</h3>
          <small className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Signup;
