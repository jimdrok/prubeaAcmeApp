import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './helpers/initializeFirebase';
import 'antd/dist/antd.css'; 
import { Provider } from './globalContext/globalContext';


ReactDOM.render(
  <React.StrictMode>
    <Provider >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

