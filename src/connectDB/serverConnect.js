const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jaggu@_123",
    database: "ecommerce"
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("✅ Connected to MySQL database.");
});

app.post("/signup", async (req, res) => {
    const { username, email, password, name, phone } = req.body; 

    if (!username || !email || !password || !name || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const sql = "INSERT INTO persons (username, email, Password, name, Phone) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [username, email, hashedPassword, name, phone], (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.json({ success: true, message: "User registered successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: "Error encrypting password", error });
    }
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required" });
    }

    const sql = "SELECT * FROM persons WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.Password);

        if (isMatch) {
            res.json({ success: true, message: "Login successful", user: { id: user.id, username: user.username } });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
