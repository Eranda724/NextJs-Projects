import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <input type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;