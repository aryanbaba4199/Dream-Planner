import React from 'react';
import { createRoot } from 'react-dom';
import { AuthProvider } from './Authentication/authcontext';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './Routes/routes';
import { BrowserRouter as Router } from'react-router-dom';


const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
  <AuthProvider
    domain="dev-xpi2qik7r02e434k.us.auth0.com"
    clientId="m4uzV9BJ9keth0hhKazvBDyBiGaPMfKU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    
  >
    
    <App />
    <AppRoutes />
    
  </AuthProvider>
  </Router>
);

reportWebVitals();
