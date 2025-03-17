
import React, { useState } from 'react';
import Input from './Input';
import { useNavigate } from "react-router-dom";
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

    const onField = [
        { id: "email", title: "Email", type: "text", placeholder: "Enter email" },
        { id: "username", title: "Username", type: "text", placeholder: "Enter username" },
        { id: "name", title: "Name", type: "text", placeholder: "Enter name" },
        { id: "password", title: "Password", type: "password", placeholder: "Enter password" },  
        { id: "confirmPassword", title: "Confirm Password", type: "password", placeholder: "Confirm password" },  
        { id: "phone", title: "Phone", type: "tel", placeholder: "Enter phone number" }  
    ];

    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/.test(password);
    const validatePhone = (phone) => /^(?:\+91)?[6-9]\d{9}$/.test(phone);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSignup = () => {
        let errorsCopy = {};
        if (!formData.username) errorsCopy.username = "Username is required";
        if (!formData.name) errorsCopy.name = "Name is required";
        if (!formData.email || !validateEmail(formData.email)) errorsCopy.email = "Enter a valid email";
        if (!formData.password || !validatePassword(formData.password)) errorsCopy.password = "Invalid password format";
        if (formData.password !== formData.confirmPassword) errorsCopy.confirmPassword = "Passwords do not match";
        if (!formData.phone || !validatePhone(formData.phone)) errorsCopy.phone = "Enter a valid phone number";

        setErrors(errorsCopy);

        if (Object.keys(errorsCopy).length === 0) {
            alert("Signup successful! Please log in.");
            navigate("/login");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Signup</h2>

            {onField.map(({ type, placeholder, id, title }) => (
                <Input
                    key={id}
                    id={id}
                    title={title}
                    type={type}
                    placeholder={placeholder}
                    value={formData[id]}
                    onChange={handleChange}
                    error={errors[id]}
                />
            ))}

            <button className='btn btn-primary mt-3' onClick={onSignup}>Signup</button>
            <p className="mt-2">
                Already have an account?{" "}
                <button className="btn btn-link p-0" onClick={() => navigate("/login")}>Login</button>
            </p>
        </div>
    );
};

export default Signup;
