// Auth/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import './Signup.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
 
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginUser(formData, history));
  };

  return (
    <div style={{backgroundColor:"#E1BEE7"}}>
      {/* <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
        <button type="submit">Login</button>
      </form> */}
      <Navbar/>
      <div className="container px-4 py-5 mx-auto"  >
  <div className="card card0" style={{border:"0"}} >
    <div className="d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center"style={{backgroundColor:"#E1BEE7"}} >
      <div className="card card1">
        <div className="row justify-content-center my-auto " style={{marginLeft:"inherit"}}>
          <div className="col-md-8 col-10 my-5">
            <div id="main" className=" row justify-content-center px-3 mb-3 "  >
              <img id="logo" src="https://i.imgur.com/PSXxjNY.png" />
            </div>
            <h3 className="mb-5 text-center heading">Auto save </h3>
            <h6 className="msg-info">Please login to your account</h6>
            <form onSubmit={onSubmit}>
            <div className="form-group">
              
              <label className="form-control-label text-muted">Username</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Phone no or email id"
                className="form-control"
                value={email} onChange={onChange} required
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-muted">Password</label>
              <input
              type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={password} onChange={onChange} required
              />
              < div onClick={togglePasswordVisibility}>
        {showPassword ? <i className="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>}
      </div>
              
            </div>
            <Link to='/signup'>
            <div className="row justify-content-center my-3 px-3">
             
              <button className="btn-block btn-color">Login </button>
            </div>
            </Link>
            </form>
            <div className="row justify-content-center my-2">
              <a href="#">
                <small className="text-muted">Forgot Password?</small>
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
     
    </div>
  </div>
</div>

    </div>
  );
};

export default Login;
