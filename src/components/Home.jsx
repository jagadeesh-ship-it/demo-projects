import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        alert("Logged out successfully!");
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Welcome to Home Page</h2>
                <div className="position-relative">
                    <button className="btn btn-secondary" onClick={() => setShowDropdown(!showDropdown)}>
                        Menu
                    </button>
                    {showDropdown && (
                        <div className="position-absolute bg-white shadow p-3 rounded" style={{ right: 0, top: "100%" }}>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <button className="btn btn-link text-dark" onClick={() => navigate("/profile")}>Profile</button>
                                </li>
                                <li>
                                    <button className="btn btn-link text-dark" onClick={() => navigate("/about")}>About</button>
                                </li>
                                <li>
                                    <button className="btn btn-link text-dark" onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <p className="mt-3">This is your home page styled with Bootstrap.</p>
        </div>
    );
};

export default Home;
