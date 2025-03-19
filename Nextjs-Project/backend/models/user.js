const db = require('../config/db');

class User {
  static createUser(username, email, password, callback) {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], callback);
  }

  static findUserByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  }
}

module.exports = User;