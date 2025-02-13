import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './mock';
import './styles/index.css';

/**
 * This file can be ignored, please work in ./components/App.tsx
 */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-developer-assessment">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
