import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importing global styles
import { store } from './config/store'; // Importing the Redux store
import { Provider } from 'react-redux'; // Importing Provider to connect Redux store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Wrapping the App with Provider to connect Redux store */}
    <App />
  </Provider>
);
