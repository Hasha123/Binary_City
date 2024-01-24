import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Client from './Components/pages/Client';
import Contact from './Components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Client' element={<Client/>} />
        </Routes>

      </Router>
    </>
    
    
  );
}

export default App;
