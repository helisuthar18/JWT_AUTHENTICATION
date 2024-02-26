import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';
import { request, setToken } from '../axios_helper';

// Import the CSS file with specific styles

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate API call to your server
      const response = await request('Post', '/login', formData);

      // Handle the response from the server
      if (response.data.accessToken) {
        // Store the token in the session storage
        setToken(response.data.accessToken);
        alert('Login Success! Data saved.');
        // Add any further actions for a successful login (e.g., redirect)
      } else {
        alert('Login Failed');
        // Handle the case where login failed
      }
    } catch (error) {
      // Handle errors
      console.error('API Error:', error);
    }
  };

  const handleSignupClick = () => {
    // Add logic for signup button click, e.g., redirect to signup page
    setShowSignupForm(!showSignupForm);
  };
if(showSignupForm){
  return<SignupForm/>
}
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
          <button type="button" onClick={handleSignupClick}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
