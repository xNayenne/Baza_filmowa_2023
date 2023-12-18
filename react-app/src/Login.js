// Login.jsx
import React from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input className="input" type="text" id="username" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input className="input" type="password" id="password" />
        </div>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
