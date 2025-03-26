import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/login", formData);
            alert(response.data.message);
            navigate("/home");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <input id="email" className="form-control my-2" type="email" placeholder="Email" onChange={handleChange} />
            <input id="password" className="form-control my-2" type="password" placeholder="Password" onChange={handleChange} />
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
