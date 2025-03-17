


import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">MyApp</a> */}
                    <Link className="navbar-brand" to="/home">MyApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-light me-2" onClick={() => navigate("/home")}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-light me-2" onClick={() => alert("About Page")}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-light me-2" onClick={() => alert("Apply Page")}>Apply</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={() => navigate("/signup")}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Home Page Content */}
            <div className="container mt-4">
                <h2>Welcome to the Home Page!</h2>
                <p>This is the main page after login. You can navigate using the menu above.</p>
            </div>
        </div>
    );
};

export default Home;
