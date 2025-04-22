

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onClose }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
                if (res.data.success) {
                    setUser(res.data.user);
                } else {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error fetching profile", error);
                navigate("/login");
            }
        };
        fetchUser();
    }, [navigate]);

    const logoutUser = async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    if (!user) return null;

    return (
        <div
            className="position-absolute end-0 mt-2 border rounded shadow p-3"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)", // translucent white
                color: "#000",
                zIndex: 100,
                width: "250px",
                backdropFilter: "blur(4px)"
            }}
        >
            <div className="text-end mb-2">
                <button className="btn-close" onClick={onClose}></button>
            </div>
            <p className="mb-1"><strong>Name:</strong> {user.username}</p>
            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
            <button className="btn btn-sm btn-danger w-100" onClick={logoutUser}>
                <FaSignOutAlt className="me-1" /> Logout
            </button>
        </div>
    );
};

export default Profile;

