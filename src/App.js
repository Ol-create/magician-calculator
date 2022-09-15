import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>

);
export default App;
