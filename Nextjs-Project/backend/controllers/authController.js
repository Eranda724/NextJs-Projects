const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    User.createUser(username, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error creating user' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    User.findUserByEmail(email, (err, results) => {
      if (err) throw err;

      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
      });
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };