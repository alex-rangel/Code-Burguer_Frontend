import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyle';

import Login from './pages/Login';
import Register from './pages/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Register/>
  </React.StrictMode>
);


