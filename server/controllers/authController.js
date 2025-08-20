const db = require("../config/db");

exports.signup = (req, res) => {
  try {
    const { username, email, password } = req.body; // ✅ match frontend

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const sql =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    db.query(sql, [username, email, password], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
