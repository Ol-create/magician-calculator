import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'

import './App.css';
import './index.css';

// Render the Calculator to the Web page.

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);