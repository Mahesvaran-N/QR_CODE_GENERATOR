import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import './css/qr_code.css';
import Qrcode from './component/qr_code';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Qrcode/>
  </React.StrictMode>
);


reportWebVitals();
