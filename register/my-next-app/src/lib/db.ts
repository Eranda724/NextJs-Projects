import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost", // Change if using a remote DB
  user: "root", // Replace with your MySQL username
  password: "your_password", // Replace with your MySQL password
  database: "auth_system",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
