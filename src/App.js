import './App.css';
import Navbar from './components/navbar'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/services' Component={Services}></Route>
          <Route path='/products' Component={Products}></Route>
          <Route path='/sign-up' Component={SignUp}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
