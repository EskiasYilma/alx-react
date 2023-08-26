import React from 'react';
import './Login.css';

function Login() {
  return (
    <main className='login'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>
          Email: <input type="email" id="email" name="email" />
      </label>
      <label htmlFor='password'>
          Password: <input type="password" id="password" name="password"></input>
      </label>
      <button>OK</button>
    </main>
  );
}

export default Login;
