
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use(
    session({
        secret: "wellcome",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, maxAge: 20 * 60 * 1000 },
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jaggu@_123",
    database: "ecommerce",
});

db.connect((err) => {
    if (err) {
        console.error("❌ DB Connection Error:", err);
    } else {
        console.log("✅ Connected to MySQL");
    }
});

const JWT_SECRET = "welcome sir";

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token.split(" ")[1], JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};

// ✅ Signup
app.post("/signup", async (req, res) => {
    const { username, email, password, name, phone } = req.body;
    if (!username || !email || !password || !name || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const checkQuery = "SELECT * FROM persons WHERE username = ? OR email = ?";
    db.query(checkQuery, [username, email], async (err, results) => {
        if (err) return res.status(500).json({ message: "DB error", error: err });
        if (results.length > 0) {
            return res.status(409).json({ message: "Username/email exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const insertQuery =
            "INSERT INTO persons (username, name, email, password, phone) VALUES (?, ?, ?, ?, ?)";
        db.query(insertQuery, [username, name, email, hashedPassword, phone], (err) => {
            if (err) return res.status(500).json({ message: "Signup failed", error: err });
            res.status(201).json({ success: true, message: "User registered successfully" });
        });
    });
});

// ✅ Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    const sql = "SELECT * FROM persons WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
        if (err) return res.status(500).json({ message: "DB error", error: err });
        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
            expiresIn: "1h",
        });

        req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
        };
        req.session.cookie.expires = new Date(Date.now() + 20 * 60 * 1000);

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: req.session.user,
        });
    });
});

// ✅ Profile
app.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ success: false, message: "Session expired" });
    }

    res.json({ success: true, user: req.session.user });
});

// ✅ Persons with roles/departments
app.get("/api/persons", verifyToken, (req, res) => {
    db.query(
        "SELECT id, name, username, email, phone, roleName, departmentName FROM persons",
        (err, results) => {
            if (err) return res.status(500).json({ message: "DB error", error: err });
            res.status(200).json({ data: results });
        }
    );
});

app.put("/api/persons/:id", verifyToken, (req, res) => {
    const { roleName, departmentName } = req.body;
    const { id } = req.params;
    if (!roleName || !departmentName) {
        return res.status(400).json({ message: "Missing role/department" });
    }

    db.query(
        "UPDATE persons SET roleName = ?, departmentName = ? WHERE id = ?",
        [roleName, departmentName, id],
        (err) => {
            if (err)
                return res.status(500).json({ message: "Role update error", error: err });
            res.status(200).json({ message: "Role assigned successfully" });
        }
    );
});

// ✅ ROLES
app.get("/api/roles", (req, res) => {
    db.query("SELECT * FROM roles", (err, result) => {
        if (err) return res.status(500).json({ message: "DB error", error: err });
        res.status(200).json({ data: result });
    });
});

app.post("/api/roles", (req, res) => {
    const { roleName } = req.body;
    db.query("INSERT INTO roles (roleName) VALUES (?)", [roleName], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Role added" });
    });
});

app.put("/api/roles/:id", (req, res) => {
    const { id } = req.params;
    const { roleName } = req.body;

    if (!roleName) return res.status(400).json({ message: "Role name required" });

    db.query("UPDATE roles SET roleName = ? WHERE rollId = ?", [roleName, id], (err) => {
        if (err) return res.status(500).json({ message: "Update failed", error: err });
        res.status(200).json({ message: "Role updated successfully" });
    });
});

app.delete("/api/roles/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM roles WHERE rollId = ?", [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Role deleted" });
    });
});

app.post("/api/roles/delete-multiple", (req, res) => {
    const { rollIDs } = req.body;
    if (!Array.isArray(rollIDs) || rollIDs.length === 0) {
        return res.status(400).json({ message: "No role IDs provided" });
    }
    const placeholders = rollIDs.map(() => "?").join(",");
    db.query(`DELETE FROM roles WHERE rollId IN (${placeholders})`, rollIDs, (err) => {
        if (err) return res.status(500).json({ message: "Delete failed", error: err });
        res.status(200).json({ message: "Roles deleted" });
    });
});

// ✅ DEPARTMENTS
app.get("/api/departments", (req, res) => {
    db.query("SELECT * FROM departments", (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});

app.post("/api/departments", (req, res) => {
    const { departmentName } = req.body;
    db.query("INSERT INTO departments (departmentName) VALUES (?)", [departmentName], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Department added" });
    });
});

app.put("/api/departments/:id", (req, res) => {
    const { departmentName } = req.body;
    const id = req.params.id;
    db.query(
        "UPDATE departments SET departmentName = ? WHERE departmentID = ?",
        [departmentName, id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send({ message: "Department updated" });
        }
    );
});

app.delete("/api/departments/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM departments WHERE departmentID = ?", [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Department deleted" });
    });
});

app.post("/api/departments/delete-multiple", (req, res) => {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "No department IDs provided" });
    }
    const placeholders = ids.map(() => "?").join(",");
    db.query(`DELETE FROM departments WHERE departmentID IN (${placeholders})`, ids, (err) => {
        if (err) return res.status(500).json({ message: "Delete failed", error: err });
        res.status(200).json({ message: "Departments deleted" });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});