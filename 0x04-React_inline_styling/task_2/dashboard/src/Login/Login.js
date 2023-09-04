import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const appStyles = StyleSheet.create({
    login: {
        margin: '20px',
        height: 'max-content',
        padding: '2em',
    },

    label: {
        paddingRight: '10px',
    },

    button: {
        backgroundColor: 'rgb(255, 255, 255)',
    },

});


function Login() {
  return (
    <main className={css(appStyles['login'])}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email' className={css(appStyles['label'])}>
          Email: <input type="email" id="email" name="email" />
      </label>
      <label htmlFor='password' className={css(appStyles['label'])}>
          Password: <input type="password" id="password" name="password"></input>
      </label>
      <button className={css(appStyles['button'])}>OK</button>
    </main>
  );
}

export default Login;
