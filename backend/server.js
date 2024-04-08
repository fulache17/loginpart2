const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 5174;

app.use(bodyParser.json());

// MySQL Connection parameters
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inzpect",
});
//Connect to database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});
// Function to set CORS headers
const setCorsHeaders = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};
// Options endpoint
app.options(["/login", "/register"], (req, res) => {
  setCorsHeaders(req, res);
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.status(200).end();
});
// Login endpoint
app.post("/login", (req, res) => {
  setCorsHeaders(req, res);
  const { username, password } = req.body;

  // Check username and password against database
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }

      if (results.length === 0) {
        res.status(401).json({ message: "Invalid credentials" });
      } else {
        res.status(200).json({ message: "Login successful" });
      }
    }
  );
});
// Register endpoint
app.post("/register", (req, res) => {
  setCorsHeaders(req, res);
  const { name, username, password } = req.body;

  // Insert new user into database
  db.query(
    "INSERT INTO users (name, username, password) VALUES (?, ?, ?)",
    [name, username, password],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      res.status(200).json({ message: "Registration successful" });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});