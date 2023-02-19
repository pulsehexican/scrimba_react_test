import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
  <p>test paragraph original</p>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(<App/>,document.getElementById('content'));
reportWebVitals(sendToVercelAnalytics);
