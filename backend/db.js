import mysql from "mysql2";

// Create connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "testdb", // your username
  password: "12345", // your password
  database: "testdb", // your database
});

// Test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
    connection.release();
  }
});

export default db;
