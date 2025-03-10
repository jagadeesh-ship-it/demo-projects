import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App  ()  {
    return (
        <Router>
            <Routes>
                <Route path="/element" element={<Home />} />
                <Route path="/Signup" element={<Login />} />
                <Route path="/Login" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
