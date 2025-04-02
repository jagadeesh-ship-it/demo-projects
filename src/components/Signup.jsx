
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Input from './Input';
import { userNameValidation, emailValidation, passwordValidation, confirmPasswordValidation, phoneValidation } from './Validation';

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
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setTouched({ ...touched, [id]: true });
        validateField(id, value);
    };

    const validateField = (id, value) => {
        let validationResponse;
        switch (id) {
            case "username":
                validationResponse = userNameValidation(value);
                break;
            case "email":
                validationResponse = emailValidation(value);
                break;
            case "password":
                validationResponse = passwordValidation(value);
                break;
            case "confirmPassword":
                validationResponse = confirmPasswordValidation(value, formData.password);
                break;
            case "phone":
                validationResponse = phoneValidation(value);
                break;
            default:
                validationResponse = { isValid: true, message: "" };
        }
        setErrors({ ...errors, [id]: validationResponse.message });
    };

    const validateForm = () => {
        let errorsCopy = {};
        Object.keys(formData).forEach((key) => {
            validateField(key, formData[key]);
            if (!formData[key]) {
                errorsCopy[key] = "This field is required";
            }
        });
        setErrors(errorsCopy);
        return Object.keys(errorsCopy).length === 0;
    };

    const onSignup = async () => {
        if (!validateForm()) return;
        try {
            const { confirmPassword, ...userData } = formData;
            const response = await axios.post('http://localhost:5000/signup', userData);
            alert(response.data.message);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/login", {state:userData});
        } catch (error) {
            setErrors({ apiError: error.response?.data?.message || "Signup failed" });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Signup</h2>
            
            <form>
                <Input title="Username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} error={errors.username} touched={touched.username} />
                <Input title="Name" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} error={errors.name} touched={touched.name} />
                <Input title="Email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} error={errors.email} touched={touched.email} />
                <Input title="Password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} error={errors.password} touched={touched.password} />
                <Input title="Confirm Password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} touched={touched.confirmPassword} />
                <Input title="Phone" id="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} touched={touched.phone} />

                <button type="button" className="btn btn-primary mt-3" onClick={onSignup}>
                    Signup
                </button>
            </form>
            {errors.apiError && <p className="text-danger">{errors.apiError}</p>}
            <p className="mt-2">
                Already have an account? <button className="btn btn-link p-0" onClick={() => navigate("/login")}>Login</button>
            </p>
            </div>
        </div>
    );
};

export default Signup;

