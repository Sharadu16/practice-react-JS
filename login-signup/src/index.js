import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
      domain="dev-vmzvrhaxln3wvxbo.us.auth0.com"
      clientId="glPQtosWKZ2p6ZZIKkJiUP9MyoKFXVki"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
);


