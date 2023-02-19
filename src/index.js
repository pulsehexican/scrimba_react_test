import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
//test
//test2
ReactDOM.render(<App/>,document.getElementById('root'));
//ReactDOM.render(<div>content1</div>,document.getElementById('content'));


const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const navbar2 = (
    <nav>
        <h1>Bob's Bistro2</h1>
        <ul>
            <li>Menu2</li>
            <li>About2</li>
            <li>Contact2</li>
        </ul>
    </nav>
)

// ReactDOM.render(navbar, document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("content")).render(navbar)

const content = ReactDOM.createRoot(document.getElementById("content"));
content.render(navbar2)

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(navbar2)

reportWebVitals(sendToVercelAnalytics);
