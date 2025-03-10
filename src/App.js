import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";  
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />  
                <Route path="/Signup" element={<Signup />} /> 
                <Route path="/Login" element={<Login />} />  
            </Routes>
        </Router>
    );
}

export default App;
