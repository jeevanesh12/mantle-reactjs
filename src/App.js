import './App.css';
import Navbar from './components/navbar';  // Adjust path if necessary
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
