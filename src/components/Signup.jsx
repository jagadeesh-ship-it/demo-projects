

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Valid 10-digit phone number is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSignup = async () => {
        if (!validateForm()) return;

        try {
            const { confirmPassword, ...payload } = formData;
            const response = await axios.post("http://localhost:5000/signup", payload);

            alert(response.data.message);
            navigate("/login");
        } catch (err) {
            const msg = err.response?.data?.message || "Signup failed";
            setErrors({ apiError: msg });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-3">Signup</h3>

                {["username", "name", "email", "password", "confirmPassword", "phone"].map((field) => (
                    <div className="mb-2" key={field}>
                        <input
                            id={field}
                            type={field.toLowerCase().includes("password") ? "password" : "text"}
                            placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                            value={formData[field]}
                            onChange={handleChange}
                            className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                        />
                        {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                    </div>
                ))}

                {errors.apiError && <p className="text-danger small text-center">{errors.apiError}</p>}

                <button className="btn btn-primary w-100 mt-2" onClick={onSignup}>
                    Signup
                </button>

                <p className="text-center mt-3 small">
                    Already have an account?{" "}
                    <button className="btn btn-link p-0" onClick={() => navigate("/login")}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;

