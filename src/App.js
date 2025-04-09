



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/Home";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Roles from "./components/Roles";
// import "bootstrap/dist/css/bootstrap.min.css";


// const ProtectedRoute = ({ element }) => {
//     const token = localStorage.getItem("token");
//     return token ? element : <Navigate to="/login" />;
// };

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Navigate to="/signup" />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//                 <Route path="/roles" element={<div className='container mt-4'><h2>Roles Management</h2></div>} />
                

//             </Routes>
//         </Router>
//     );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

// 🔒 Protect Home if not logged in
const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("token");
    return token ? element : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            </Routes>
        </Router>
    );
};

export default App;



