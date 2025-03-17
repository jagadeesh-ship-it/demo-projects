// 

import React, { useState } from 'react';
import Input from './Input';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({}); 
    const fields = [
        { id: "email", title: "Email", type: "text", placeholder: "Enter email" },
        { id: "password", title: "Password", type: "password", placeholder: "Enter password" },
    ];
    

    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onLogin = () => {
        let errorsCopy = {};
        if (!formData.email || !validateEmail(formData.email)) errorsCopy.email = "Enter a valid email";
        if (!formData.password) errorsCopy.password = "Password is required";

        setErrors(errorsCopy);
        if (Object.keys(errorsCopy).length === 0) {
            alert("Login Successful!");
            navigate("/home"); 
        }
    };

    return (

        <div className="container mt-5">
            <h2>Login</h2>

            {fields.map(({ type,placeholder,id,title }) => (
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

            <button type="button" className="btn btn-primary mt-3" onClick={onLogin}>
                Login
            </button>

            <p className="mt-2">
                Don't have an account?{" "}
                <button className="btn btn-link p-0" onClick={() => navigate("/signup")}>
                    Signup
                </button>
            </p>
        </div>
    );
};

export default Login;
