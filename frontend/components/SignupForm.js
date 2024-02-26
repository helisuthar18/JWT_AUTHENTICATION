import React, { useState } from 'react';

import {request} from '../axios_helper';
import LoginForm from './LoginForm';

const SignUpForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();


    try {
      // Simulate API call to your server for signup
      const response = await request('Post', '/signup', signupData)

      // Handle the response from the server
      console.log('Signup Response:', response.data);

      // Add any further actions for a successful signup (e.g., redirect)
    } catch (error) {
      // Handle errors
      console.error('API Error:', error);
    }
  };

  const handleLoginClick = () => {
    // Add logic for signup button click, e.g., redirect to signup page
    setShowLoginForm(!showLoginForm);
  };
   
if(showLoginForm){
  return<LoginForm/>
}

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSignupSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={signupData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signupData.email}
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
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit">Sign up</button>
          <button type="button" onClick={handleLoginClick}>login</button>
        </div>

      </form>
    </div>
  );
};

export default SignUpForm;
