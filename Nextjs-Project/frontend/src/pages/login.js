import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert('Login successful!');
      localStorage.setItem('token', res.data.token); // Store the token
      navigate('/dashboard'); // Redirect to dashboard or home page
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;