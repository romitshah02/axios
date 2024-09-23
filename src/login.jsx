import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      console.error('Password must be at least 8 characters long');
      return;
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      console.error('Password must contain at least one uppercase letter, one lowercase letter, and one number');
      return;
    }
    console.log('Login submitted', { username, password });

    navigate('/app' , {state: {username : username, password: password}});
  };

  return (
    <>
      <div className="login-form">
      <form onSubmit={handleSubmit} className='login'>
      <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
    </>
  
  );
};

export default Login;

