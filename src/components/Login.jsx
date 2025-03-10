import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedData = localStorage.getltem('useDetails');
        if (!storedData) {
            setMessage('No user found. Please sign up first.');
            return;
        }
        const { username, email, password: storedPassword } = JSON.parse(storedData);
        if ((identifier === username || identifier === email) && password === storedPassword) {
            setMessage('Login Successful!');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } else {
            setMessage('invalid details. Please try again.');
        }

    };
    return (
        <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Username or Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" variant="primary">Login</Button>
            </form>
            {message && (
                <div className={`alert mt-3 ${message === 'Login Successful!' ? 'alert-success' : 'alert-danger'}`}>
                    {message}
                </div>
            )}
            <p className="mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;