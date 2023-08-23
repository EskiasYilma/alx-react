import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';


function App() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} alt="Holberton Logo" />
              <h1>School dashboard</h1>
          </header>

          <body className="App-body">
              <p>Login to access the full dashboard</p>
              <label htmlFor='email'>
                  Email: <input type="email" id="email" name="email" />
              </label>
              <label htmlFor='password'>
                  Password: <input type="password" id="password" name="password"></input>
              </label>
              <button>OK</button>
          </body>
          <footer className="App-footer">
              <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          </footer>
      </div>
    );
}

export default App;
