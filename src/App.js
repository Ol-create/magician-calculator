import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import './App.css';
import Calculator from './pages/CalculatorPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';


const App = () => {
  return ( 
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator pre="" operand="" curr="0" />} />
        <Route path="/quote" element={<Quote />} />
        </Routes>
  </BrowserRouter>
  
);
}
export default App;