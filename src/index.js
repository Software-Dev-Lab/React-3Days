import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './useDefferedValue/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// 性能分析相关，暂时不用管
reportWebVitals();
