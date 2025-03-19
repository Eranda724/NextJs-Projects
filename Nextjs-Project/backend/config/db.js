const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'tast12'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db;