
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaSignOutAlt, FaUser } from 'react-icons/fa';

// import Sidebar from './Sidebar';
// import Admin from './Roles';
// import Departments from './Departments';
// import RoleAssign from './RolesAssign'

// const Home = () => {
//     const navigate = useNavigate();
//     const [showProfile, setShowProfile] = useState(false);
//     const [user, setUser] = useState(null);
//     const [sessionTimer, setSessionTimer] = useState(null);
//     const [activeSection, setActiveSection] = useState('home');

//     const logoutUser = useCallback(async () => {
//         try {
//             await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         navigate("/login");
//     }, [navigate]);

//     const startSessionTimer = useCallback(() => {
//         if (sessionTimer) clearTimeout(sessionTimer);
//         const timer = setTimeout(() => {
//             alert("Session expired. Please login again.");
//             logoutUser();
//         }, 2 * 60 * 1000); // 2 minutes
//         setSessionTimer(timer);
//     }, [sessionTimer, logoutUser]);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5000/profile", { withCredentials: true });
//                 if (response.data.success) {
//                     setUser(response.data.user);
//                     startSessionTimer();
//                 } else {
//                     logoutUser();
//                 }
//             } catch (error) {
//                 logoutUser();
//             }
//         };

//         fetchUserData();
//     }, [logoutUser, startSessionTimer]);

//     useEffect(() => {
//         return () => clearTimeout(sessionTimer);
//     }, [sessionTimer]);

//     return (
//         <div className="d-flex flex-column vh-100">
//             {/* Header */}
//             <header className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
//                 <h3 className="m-0">College Dashboard</h3>
//                 {user && (
//                     <div className="d-flex align-items-center">
//                         <button className="btn btn-light me-3" onClick={() => setShowProfile(!showProfile)}>
//                             <FaUser className="me-2" /> Profile
//                         </button>
//                         <button className="btn btn-danger" onClick={logoutUser}>
//                             <FaSignOutAlt className="me-2" /> Logout
//                         </button>
//                     </div>
//                 )}
//             </header>

//             {/* Body Layout */}
//             <div className="d-flex flex-grow-1">
//                 <Sidebar setActiveSection={setActiveSection} />
//                 <div className="container-fluid mt-4 flex-grow-1">
//                     {activeSection === 'home' && <h2>Welcome, {user?.username || 'User'}!</h2>}
//                     {activeSection === 'admin' && <Admin />}
//                     {activeSection === 'departments' && <Departments />}
//                     {activeSection === 'roleassign' && <RoleAssign />}

//                     {/* Profile Card */}
//                     {showProfile && user && (
//                         <div className="card mt-4 p-3" style={{ maxWidth: '400px' }}>
//                             <h5>Profile Info</h5>
//                             <p><strong>Username:</strong> {user.username}</p>
//                             <p><strong>Email:</strong> {user.email}</p>
//                             <p><strong>Phone:</strong> {user.phone}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Footer */}
//             <footer className="bg-dark text-white text-center py-2">
//                 &copy; {new Date().getFullYear()} EASYBUY. All rights reserved.
//             </footer>
//         </div>
//     );
// };

// export default Home;

// Home.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Roles from './Roles';
import Departments from './Departments';
import RoleAssign from './RolesAssign';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const [sessionTimer, setSessionTimer] = useState(null);

    const logoutUser = useCallback(async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
        } catch (error) {
            console.error("Logout failed", error);
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }, [navigate]);

    const startSessionTimer = useCallback(() => {
        if (sessionTimer) clearTimeout(sessionTimer);
        const timer = setTimeout(() => {
            alert("Session expired. Please login again.");
            logoutUser();
        }, 2 * 60 * 1000);
        setSessionTimer(timer);
    }, [sessionTimer, logoutUser]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
                if (res.data.success) {
                    setUser(res.data.user);
                    startSessionTimer();
                } else {
                    logoutUser();
                }
            } catch (error) {
                logoutUser();
            }
        };
        fetchUser();
    }, [logoutUser, startSessionTimer]);

    useEffect(() => () => clearTimeout(sessionTimer), [sessionTimer]);

    return (
        <div className="d-flex vh-100 overflow-hidden">
            {showSidebar && <Sidebar setSelectedSection={setActiveSection} />}
            <div className="flex-grow-1 d-flex flex-column">
                <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
                    <div className="d-flex align-items-center">
                        <FaBars size={24} className="me-3 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
                        <h4 className="m-0">EasyBuy Dashboard</h4>
                    </div>
                    <div className="position-relative">
                        <FaUserCircle
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setShowProfile(!showProfile)}
                        />
                        {showProfile && user && (
                            <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-3" style={{ zIndex: 100 }}>
                                <p className="mb-1"><strong>Name:</strong> {user.username}</p>
                                <p className="mb-1"><strong>Email:</strong> {user.email}</p>
                                <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
                                <button className="btn btn-sm btn-danger w-100" onClick={logoutUser}>
                                    <FaSignOutAlt className="me-1" /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                <main className="p-4 overflow-auto" style={{ flexGrow: 1 }}>
                    {activeSection === 'home' && <h3>Welcome, {user?.username || 'User'}!</h3>}
                    {activeSection === 'roles' && <Roles />}
                    {activeSection === 'departments' && <Departments />}
                    {activeSection === 'roleAssign' && <RoleAssign />}
                </main>

                <footer className="bg-light text-center py-2 border-top">
                    <small>&copy; {new Date().getFullYear()} EasyBuy | All rights reserved</small>
                </footer>
            </div>
        </div>
    );
};

export default Home;
