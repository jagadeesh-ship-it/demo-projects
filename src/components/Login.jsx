// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const Login = () => {
// //     const navigate = useNavigate();
// //     const [formData, setFormData] = useState({ email: "", password: "" });
// //     const [error, setError] = useState("");

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.id]: e.target.value });
// //     };

// //     const handleLogin = async () => {
// //         try {
// //             const response = await axios.post("http://localhost:5000/login", formData);
// //             alert(response.data.message);
// //             localStorage.setItem("token", response.data.token)
// //             localStorage.setItem("user", JSON.stringify(response.data.user));
          
// //             navigate("/home", {state:response.data.user});
// //         } catch (err) {
// //             setError(err.response?.data?.message || "Login failed");
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Login</h2>
// //             <input id="email" className="form-control form-control-sm my-2" type="email" placeholder="Email" onChange={handleChange} />
// //             <input id="password" className="form-control my-2" type="password" placeholder="Password" onChange={handleChange} />
// //             {error && <p className="text-danger">{error}</p>}
// //             <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
// //         </div>
// //     );
// // };

// // export default Login;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Login = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [error, setError] = useState("");

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.id]: e.target.value });
//     };

//     const handleLogin = async () => {
//         if (!formData.email || !formData.password) {
//             setError("Email and password are required!");
//             return;
//         }

//         try {
//             const response = await axios.post("http://localhost:5000/login", formData);
//             alert(response.data.message);

//             // ✅ Store JWT Token in Local Storage
//             localStorage.setItem("token", response.data.token);
//             localStorage.setItem("user", JSON.stringify(response.data.user));

//             // ✅ Redirect to Home
//             navigate("/home", { state: response.data.user });
//         } catch (err) {
//             setError(err.response?.data?.message || "Login failed");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Login</h2>
//             <input id="email" className="form-control form-control-sm my-2" type="email" placeholder="Email" onChange={handleChange} />
//             <input id="password" className="form-control my-2" type="password" placeholder="Password" onChange={handleChange} />
//             {error && <p className="text-danger">{error}</p>}
//             <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [sessionTimer, setSessionTimer] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const startSessionTimer = () => {
        if (sessionTimer) clearTimeout(sessionTimer);
        const timer = setTimeout(() => {
            alert("Session expired. Please login again.");
            logoutUser();
        }, 60 * 60 * 1000); // 1 hour session
        setSessionTimer(timer);
    };

    const logoutUser = async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
        } catch (error) {
            console.error("Logout error:", error.message);
        }
        localStorage.clear();
        navigate("/login");
    };

    const onLogin = async () => {
        const errs = {};
        if (!formData.username) errs.username = "Username is required";
        if (!formData.password) errs.password = "Password is required";

        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        try {
            const res = await axios.post("http://localhost:5000/login", formData, { withCredentials: true });

            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                alert(res.data.message);
                startSessionTimer();
                navigate("/home");
            } else {
                setErrors({ apiError: res.data.message });
            }
        } catch (err) {
            setErrors({ apiError: err.response?.data?.message || "Login failed" });
        }
    };

    useEffect(() => {
        return () => clearTimeout(sessionTimer);
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "350px" }}>
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className={`form-control mb-2 ${errors.username ? "is-invalid" : ""}`}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}

                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-control mb-2 ${errors.password ? "is-invalid" : ""}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}

                    <button type="button" className="btn btn-primary w-100" onClick={onLogin}>
                        Login
                    </button>
                </form>

                {errors.apiError && (
                    <div className="text-danger text-center mt-2 small">{errors.apiError}</div>
                )}

                <p className="text-center mt-3 mb-0">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => navigate("/signup")}
                    >
                        Signup
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;

