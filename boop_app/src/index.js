import React from 'react';
import createRoot from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

createRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
