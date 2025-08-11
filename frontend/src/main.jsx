import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter } from 'react-router-dom';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);