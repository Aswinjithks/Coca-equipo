import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

if (!googleClientId) {
  throw new Error('Google Client ID is not set');
}

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);


