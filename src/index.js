import React from 'react';
import { createRoot } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-xpi2qik7r02e434k.us.auth0.com"
    clientId="m4uzV9BJ9keth0hhKazvBDyBiGaPMfKU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
