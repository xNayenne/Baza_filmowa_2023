// Registration.jsx
import React from 'react';
import './Registration.css'; // Import the CSS file for styling

const Registration = () => {
  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="login">
            Login:
          </label>
          <input className="input" type="text" id="login" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input className="input" type="text" id="name" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input className="input" type="email" id="email" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input className="input" type="password" id="password" />
        </div>
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
