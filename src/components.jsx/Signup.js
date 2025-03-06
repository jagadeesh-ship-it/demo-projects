import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log(isSignup ? "User registered" : "User logged in", formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
            <h2>{isSignup ? "Signup" : "Login"}</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded">
                <div className="form-floating mt-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                {isSignup && (
                    <div className="form-floating mt-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                )}
                <div className="form-floating mt-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                {isSignup && (
                    <div className="form-floating mt-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                )}
                <button type="submit" className={`btn ${isSignup ? "btn-primary" : "btn-success"}`}>
                    {isSignup ? "Signup" : "Login"}
                </button>
            </form>
            <button className="btn btn-info mt-3" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "Go to Login" : "Go to Signup"}
            </button>
            </div>
            </div>
        </div>
    );
}

export default Signup;
