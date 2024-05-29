import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Login from './components/Login';
import Signup from './components/Signup';
import Form from './Form/Form';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className="App">
  
  <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
  <Route path='/form' element={<Form/>}/>
 
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  </Routes>
  </Router> 
    </div>
  );
};

export default App;
