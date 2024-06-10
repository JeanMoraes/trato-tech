import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Navbar } from './components/Navbar';
import Router from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
