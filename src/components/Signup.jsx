import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const validateForm = () => {
        let errorsCopy = {};

        if (!formData.username) errorsCopy.username = "Username is required";
        if (!formData.name) errorsCopy.name = "Name is required";
        if (!formData.email) errorsCopy.email = "Email is required";
        if (!formData.password) errorsCopy.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            errorsCopy.confirmPassword = "Passwords do not match";
        if (!formData.phone) errorsCopy.phone = "Phone number is required";

        setErrors(errorsCopy);
        return Object.keys(errorsCopy).length === 0;
    };

    const onSignup = async () => {
        if (!validateForm()) return;

        try {
            
            const { confirmPassword, ...userData } = formData;

            const response = await axios.post('http://localhost:5000/signup', userData);
            alert(response.data.message);
            navigate("/login");
        } catch (error) {
            setErrors({ apiError: error.response?.data?.message || "Signup failed" });
        }
    };

    return (
        <div className="container mt-5">
            <h2>Signup</h2>
            <form>
                <div className="form-group">
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-danger">{errors.username}</p>}
                </div>

                <div className="form-group">
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <input
                        id="confirmPassword"
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                </div>

                <div className="form-group">
                    <input
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>

                <button type="button" className="btn btn-primary mt-3" onClick={onSignup}>
                    Signup
                </button>
            </form>

            {errors.apiError && <p className="text-danger">{errors.apiError}</p>}

            <p className="mt-2">
                Already have an account?{" "}
                <button className="btn btn-link p-0" onClick={() => navigate("/login")}>
                    Login
                </button>
            </p>
        </div>
    );
};

export default Signup;
