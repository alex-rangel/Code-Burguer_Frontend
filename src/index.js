import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyle';

import { UserProvider } from "./hooks/UserContext"
import { ToastContainer } from 'react-toastify';

import Rotas from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ToastContainer/>
    <UserProvider>
      <Rotas/>
    </UserProvider>
  </React.StrictMode>
);


