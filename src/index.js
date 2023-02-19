import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

function Formular() {
    return (
      <div className="Formular">
          <p>
            Test <code>http://go.HEX.com</code> and stake 5555 !!!
          </p>
      </div>
    );
  }

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


var testing = Formular();

// ReactDOM.render(navbar, document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("content")).render(navbar)

const content = ReactDOM.createRoot(document.getElementById("content"));
content.render(navbar)

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(testing)

reportWebVitals(sendToVercelAnalytics);
