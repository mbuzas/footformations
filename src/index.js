import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AppContext from './context/appContext'
const initialState = {
  isLoading: false,
  isMember: false,
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext.Provider value={initialState}>
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

