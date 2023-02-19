import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
//test
//test2
ReactDOM.render(<App/>,document.getElementById('root'));

reportWebVitals(sendToVercelAnalytics);
