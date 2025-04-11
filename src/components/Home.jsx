
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import Sidebar from './Sidebar';
// import Roles from './Roles';
// import Departments from './Departments';
// import RoleAssign from './RolesAssign';
// import img from  "../img/Homeimg.jpg";

// const divStyle = {
//     width: "100vw",
//     height: "100vh",
//     backgroundImage: `url(${img})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
// };

// const Home = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);
//     const [showSidebar, setShowSidebar] = useState(true);
//     const [activeSection, setActiveSection] = useState('home');
//     const [sessionTimer, setSessionTimer] = useState(null);

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
//         }, 2 * 60 * 1000);
//         setSessionTimer(timer);
//     }, [sessionTimer, logoutUser]);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
//                 if (res.data.success) {
//                     setUser(res.data.user);
//                     startSessionTimer();
//                 } else {
//                     logoutUser();
//                 }
//             } catch (error) {
//                 logoutUser();
//             }
//         };
//         fetchUser();
//     }, [logoutUser, startSessionTimer]);

//     useEffect(() => () => clearTimeout(sessionTimer), [sessionTimer]);

//     return (
//         <div style={divStyle}>
//         <div className="d-flex vh-100 overflow-hidden">
//             {showSidebar && <Sidebar setSelectedSection={setActiveSection} />}
//             <div className="flex-grow-1 d-flex flex-column">
//                 <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
//                     <div className="d-flex align-items-center">
//                         <FaBars size={24} className="me-3 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
//                         <h4 className="m-0">EasyBuy Dashboard</h4>
//                     </div>
//                     <div className="position-relative">
//                         <FaUserCircle
//                             size={30}
//                             className="cursor-pointer"
//                             onClick={() => setShowProfile(!showProfile)}
//                         />
//                         {showProfile && user && (
//                             <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-3" style={{ zIndex: 100 }}>
//                                 <p className="mb-1"><strong>Name:</strong> {user.username}</p>
//                                 <p className="mb-1"><strong>Email:</strong> {user.email}</p>
//                                 <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
//                                 <button className="btn btn-sm btn-danger w-100" onClick={logoutUser}>
//                                     <FaSignOutAlt className="me-1" /> Logout
//                                 </button>
//                             </div>
                        
//                         )}
//                     </div>
//                 </header>
//                 </div>

//                 <main className="p-4 overflow-auto" style={{ flexGrow: 1 }}>
//                     {activeSection === 'home' && <h3>Welcome, {user?.username || 'User'}!</h3>}
//                     {activeSection === 'roles' && <Roles />}
//                     {activeSection === 'departments' && <Departments />}
//                     {activeSection === 'roleAssign' && <RoleAssign />}
//                 </main>

//                 <footer className="bg-light text-center py-2 border-top">
//                     <small>&copy; {new Date().getFullYear()} EasyBuy | All rights reserved</small>
//                 </footer>
//             </div>
//         </div>
//     );
// };

// export default Home;
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import Sidebar from './Sidebar';
// import Roles from './Roles';
// import Departments from './Departments';
// import RoleAssign from './RolesAssign';
// import img from "../img/Homeimg.jpg";

// const Home = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);
//     const [showSidebar, setShowSidebar] = useState(true);
//     const [activeSection, setActiveSection] = useState('home');
//     const [sessionTimer, setSessionTimer] = useState(null);

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
//         }, 2 * 60 * 1000);
//         setSessionTimer(timer);
//     }, [sessionTimer, logoutUser]);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
//                 if (res.data.success) {
//                     setUser(res.data.user);
//                     startSessionTimer();
//                 } else {
//                     logoutUser();
//                 }
//             } catch (error) {
//                 logoutUser();
//             }
//         };
//         fetchUser();
//     }, [logoutUser, startSessionTimer]);

//     useEffect(() => () => clearTimeout(sessionTimer), [sessionTimer]);

//     return (
//         <div className="d-flex vh-100 overflow-hidden">
//             {showSidebar && <Sidebar setSelectedSection={setActiveSection} />}
//             <div className="flex-grow-1 d-flex flex-column">
//                 <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
//                     <div className="d-flex align-items-center">
//                         <FaBars size={24} className="me-3 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
//                         <h4 className="m-0">EasyBuy Dashboard</h4>
//                     </div>
//                     <div className="position-relative">
//                         <FaUserCircle
//                             size={30}
//                             className="cursor-pointer"
//                             onClick={() => setShowProfile(!showProfile)}
//                         />
//                         {showProfile && user && (
//                             <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-3" style={{ zIndex: 100 }}>
//                                 <p className="mb-1"><strong>Name:</strong> {user.username}</p>
//                                 <p className="mb-1"><strong>Email:</strong> {user.email}</p>
//                                 <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
//                                 <button className="btn btn-sm btn-danger w-100" onClick={logoutUser}>
//                                     <FaSignOutAlt className="me-1" /> Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </header>

//                 <main className="p-4 overflow-auto" style={{ flexGrow: 1 }}>
//                     {activeSection === 'home' && (
//                         <div
//                             style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 backgroundImage: `url(${img})`,
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                                 borderRadius: "8px",
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 color: "#fff",
//                                 textShadow: "1px 1px 4px rgba(0,0,0,0.7)"
//                             }}
//                         >
//                             <h3>Welcome, {user?.username || 'User'}!</h3>
//                         </div>
//                     )}
//                     {activeSection === 'roles' && <Roles />}
//                     {activeSection === 'departments' && <Departments />}
//                     {activeSection === 'roleAssign' && <RoleAssign />}
//                 </main>

//                 <footer className="bg-light text-center py-2 border-top">
//                     <small>&copy; {new Date().getFullYear()} EasyBuy | All rights reserved</small>
//                 </footer>
//             </div>
//         </div>
//     );
// };

// // export default Home;
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import Roles from './Roles';
// import Departments from './Departments';
// import RoleAssign from './RolesAssign';
// import SubHeader from './SubHeader';
// import img from "../img/Homeimg.jpg";

// const Home = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');
//     const [sessionTimer, setSessionTimer] = useState(null);

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
//         }, 2 * 60 * 1000);
//         setSessionTimer(timer);
//     }, [sessionTimer, logoutUser]);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
//                 if (res.data.success) {
//                     setUser(res.data.user);
//                     startSessionTimer();
//                 } else {
//                     logoutUser();
//                 }
//             } catch (error) {
//                 logoutUser();
//             }
//         };
//         fetchUser();
//     }, [logoutUser, startSessionTimer]);

//     useEffect(() => () => clearTimeout(sessionTimer), [sessionTimer]);

//     return (
//         <div className="d-flex flex-column vh-100 overflow-hidden">
//             <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
//                 <h4 className="m-0">EasyBuy Dashboard</h4>
//                 <div className="position-relative">
//                     <FaUserCircle
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => setShowProfile(!showProfile)}
//                     />
//                     {showProfile && user && (
//                         <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-3" style={{ zIndex: 100 }}>
//                             <p className="mb-1"><strong>Name:</strong> {user.username}</p>
//                             <p className="mb-1"><strong>Email:</strong> {user.email}</p>
//                             <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
//                             <button className="btn btn-sm btn-danger w-100" onClick={logoutUser}>
//                                 <FaSignOutAlt className="me-1" /> Logout
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </header>

//             {/* SubHeader navigation */}
//             <SubHeader setActiveSection={setActiveSection} />

//             <main className="p-4 overflow-auto flex-grow-1">
//                 {activeSection === 'home' && (
//                     <div
//                         style={{
//                             width: "100%",
//                             height: "100%",
//                             backgroundImage: `url(${img})`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             borderRadius: "8px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             color: "#fff",
//                             textShadow: "1px 1px 4px rgba(0,0,0,0.7)"
//                         }}
//                     >
//                         <h3>Welcome, {user?.username || 'User'}!</h3>
//                     </div>
//                 )}
//                 {activeSection === 'about' && (
//                     <div>
//                         <h4>About Us</h4>
//                         <p>This is the EasyBuy Dashboard system. Here you can manage roles, departments, and more.</p>
//                     </div>
//                 )}
//                 {activeSection === 'roles' && <Roles />}
//                 {activeSection === 'departments' && <Departments />}
//                 {activeSection === 'roleAssign' && <RoleAssign />}
//             </main>

//             <footer className="bg-light text-center py-2 border-top">
//                 <small>&copy; {new Date().getFullYear()} EasyBuy | All rights reserved</small>
//             </footer>
//         </div>
//     );
// };

// export default Home;


import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';
import Roles from './Roles';
import Departments from './Departments';
import RoleAssign from './RolesAssign';
import SubHeader from './SubHeader';
import Profile from './Profile'; // ✅ NEW IMPORT
import img from "../img/Homeimg.jpg";

const Home = () => {
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);
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
        const verifySession = async () => {
            try {
                const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
                if (res.data.success) {
                    startSessionTimer();
                } else {
                    logoutUser();
                }
            } catch (error) {
                logoutUser();
            }
        };
        verifySession();
    }, [logoutUser, startSessionTimer]);

    useEffect(() => () => clearTimeout(sessionTimer), [sessionTimer]);

    return (
        <div className="d-flex flex-column vh-100 overflow-hidden">
            <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
                <h4 className="m-0">EasyBuy Dashboard</h4>
                <div className="position-relative">
                    <FaUserCircle
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setShowProfile(!showProfile)}
                    />
                    {showProfile && <Profile onClose={() => setShowProfile(false)} />} {/* ✅ REPLACED INLINE PROFILE */}
                </div>
            </header>

            <SubHeader setActiveSection={setActiveSection} />

            <main className="p-4 overflow-auto flex-grow-1">
                {activeSection === 'home' && (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff",
                            textShadow: "1px 1px 4px rgba(0,0,0,0.7)"
                        }}
                    >
                        <h3>Welcome to EasyBuy!</h3>
                    </div>
                )}
                {activeSection === 'about' && (
                    <div>
                        <h4>About Us</h4>
                        <p>This is the EasyBuy Dashboard system. Here you can manage roles, departments, and more.</p>
                    </div>
                )}
                {activeSection === 'roles' && <Roles />}
                {activeSection === 'departments' && <Departments />}
                {activeSection === 'roleAssign' && <RoleAssign />}
            </main>

            <footer className="bg-light text-center py-2 border-top">
                <small>&copy; {new Date().getFullYear()} EasyBuy | All rights reserved</small>
            </footer>
        </div>
    );
};

export default Home;
