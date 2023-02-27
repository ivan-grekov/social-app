import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import CalendarContextWrapper from './context/CalendarContextWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CalendarContextWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CalendarContextWrapper>
    </AuthContextProvider>
  </React.StrictMode>
);
