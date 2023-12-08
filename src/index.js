import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
