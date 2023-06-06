import React from 'react';
import {Auth0Provider} from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CCS
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-rgb85itu84ssn4yz.us.auth0.com"
    clientId="YnyKNTDjSYEqMAha13mldZAbXbY2xMtb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Auth0Provider>
);