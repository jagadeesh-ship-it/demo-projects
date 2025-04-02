import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
 
        if (!token) {
            alert("Session expired! Please login again.");
            navigate("/login");
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; 

            if (decodedToken.exp < currentTime) {
                alert("Session expired! Please login again.");
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
            } else {
                setUser(JSON.parse(localStorage.getItem("user")));

    
                const timeLeft = (decodedToken.exp - currentTime) * 1000; 
                const logoutTimer = setTimeout(() => {
                    alert("Session expired! Please login again.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate("/login");
                }, timeLeft);

                return () => clearTimeout(logoutTimer);
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        alert("Logged out successfully!");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header */}
            <header className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
                {/* Left Side - Dropdown Menu */}
                <div className="position-relative">
                    <button className="btn btn-light" onClick={() => setShowDropdown(!showDropdown)}>
                        Menu
                    </button>
                    {showDropdown && (
                        <div className="position-absolute bg-white shadow p-3 rounded" style={{ left: 0, top: "100%" }}>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <button className="btn btn-link text-dark" onClick={() => setShowProfile(!showProfile)}>
                                        Profile
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-link text-dark" onClick={() => navigate("/about")}>About</button>
                                </li>
                                <li>
                                    <button className="btn btn-link text-dark" onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>

                            {/* Profile Details (Shown only when clicking "Profile") */}
                            {showProfile && (
                                <div className="card p-3 shadow mt-2" style={{ width: "250px" }}>
                                    <h5>Profile Details</h5>
                                    <p><strong>Username:</strong> {user?.username || "N/A"}</p>
                                    <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                                    <p><strong>Phone:</strong> {user?.phone || "N/A"}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Side - Welcome Message */}
                <h4 className="mb-0">Welcome, {user?.name || "Ecommerce"}</h4>
            </header>

            {/* Main Content */}
            <main className="container my-5 flex-grow-1 d-flex flex-column align-items-center">
                <h2>Home Page</h2>
                <p>This is your home page styled with Bootstrap.</p>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center p-3">
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;

