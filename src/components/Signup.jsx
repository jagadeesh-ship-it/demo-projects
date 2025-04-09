
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import Input from './Input';
// // // import { userNameValidation, emailValidation, passwordValidation, confirmPasswordValidation, phoneValidation } from './Validation';

// // // const Signup = () => {
// // //     const navigate = useNavigate();
// // //     const [formData, setFormData] = useState({
// // //         username: '',
// // //         name: '',
// // //         email: '',
// // //         password: '',
// // //         confirmPassword: '',
// // //         phone: ''
// // //     });
// // //     const [errors, setErrors] = useState({});
// // //     const [touched, setTouched] = useState({});

// // //     const handleChange = (e) => {
// // //         const { id, value } = e.target;
// // //         setFormData({ ...formData, [id]: value });
// // //         setTouched({ ...touched, [id]: true });
// // //         validateField(id, value);
// // //     };

// // //     const validateField = (id, value) => {
// // //         let validationResponse;
// // //         switch (id) {
// // //             case "username":
// // //                 validationResponse = userNameValidation(value);
// // //                 break;
// // //             case "email":
// // //                 validationResponse = emailValidation(value);
// // //                 break;
// // //             case "password":
// // //                 validationResponse = passwordValidation(value);
// // //                 break;
// // //             case "confirmPassword":
// // //                 validationResponse = confirmPasswordValidation(value, formData.password);
// // //                 break;
// // //             case "phone":
// // //                 validationResponse = phoneValidation(value);
// // //                 break;
// // //             default:
// // //                 validationResponse = { isValid: true, message: "" };
// // //         }
// // //         setErrors({ ...errors, [id]: validationResponse.message });
// // //     };

// // //     const validateForm = () => {
// // //         let errorsCopy = {};
// // //         Object.keys(formData).forEach((key) => {
// // //             validateField(key, formData[key]);
// // //             if (!formData[key]) {
// // //                 errorsCopy[key] = "This field is required";
// // //             }
// // //         });
// // //         setErrors(errorsCopy);
// // //         return Object.keys(errorsCopy).length === 0;
// // //     };

// // //     const onSignup = async () => {
// // //         if (!validateForm()) return;
// // //         try {
// // //             const { confirmPassword, ...userData } = formData;
// // //             const response = await axios.post('http://localhost:5000/signup', userData);
// // //             alert(response.data.message);
// // //             localStorage.setItem("user", JSON.stringify(userData));
// // //             navigate("/login", {state:userData});
// // //         } catch (error) {
// // //             setErrors({ apiError: error.response?.data?.message || "Signup failed" });
// // //         }
// // //     };

// // //     return (
// // //         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
// // //             <div className="card shadow-lg p-4" style={{ width: "400px" }}>
// // //                 <h2 className="text-center mb-4">Signup</h2>
            
// // //             <form>
// // //                 <Input title="Username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} error={errors.username} touched={touched.username} />
// // //                 <Input title="Name" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} error={errors.name} touched={touched.name} />
// // //                 <Input title="Email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} error={errors.email} touched={touched.email} />
// // //                 <Input title="Password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} error={errors.password} touched={touched.password} />
// // //                 <Input title="Confirm Password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} touched={touched.confirmPassword} />
// // //                 <Input title="Phone" id="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} touched={touched.phone} />

// // //                 <button type="button" className="btn btn-primary mt-3" onClick={onSignup}>
// // //                     Signup
// // //                 </button>
// // //             </form>
// // //             {errors.apiError && <p className="text-danger">{errors.apiError}</p>}
// // //             <p className="mt-2">
// // //                 Already have an account? <button className="btn btn-link p-0" onClick={() => navigate("/login")}>Login</button>
// // //             </p>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // export default Signup;

// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import Input from './Input'; // ✅ reusable input
// // // import {
// // //     userNameValidation,
// // //     emailValidation,
// // //     passwordValidation,
// // //     confirmPasswordValidation,
// // //     phoneValidation
// // // } from './Validation'; // ✅ reusable validation functions

// // // const Signup = () => {
// // //     const navigate = useNavigate();
// // //     const [formData, setFormData] = useState({
// // //         username: '',
// // //         name: '',
// // //         email: '',
// // //         password: '',
// // //         confirmPassword: '',
// // //         phone: ''
// // //     });
// // //     const [errors, setErrors] = useState({});
// // //     const [touched, setTouched] = useState({});

// // //     const handleChange = (e) => {
// // //         const { id, value } = e.target;
// // //         setFormData({ ...formData, [id]: value });
// // //         setTouched({ ...touched, [id]: true });
// // //         validateField(id, value); // ✅ validate on each input change
// // //     };

// // //     const validateField = (id, value) => {
// // //         let validationResponse;

// // //         // ✅ call appropriate validation for each field
// // //         switch (id) {
// // //             case "username":
// // //                 validationResponse = userNameValidation(value);
// // //                 break;
// // //             case "email":
// // //                 validationResponse = emailValidation(value);
// // //                 break;
// // //             case "password":
// // //                 validationResponse = passwordValidation(value);
// // //                 break;
// // //             case "confirmPassword":
// // //                 validationResponse = confirmPasswordValidation(value, formData.password); // ✅ compare with password
// // //                 break;
// // //             case "phone":
// // //                 validationResponse = phoneValidation(value);
// // //                 break;
// // //             default:
// // //                 validationResponse = { isValid: true, message: "" };
// // //         }

// // //         // ✅ update error message if validation fails
// // //         setErrors(prev => ({ ...prev, [id]: validationResponse.message }));
// // //     };

// // //     const validateForm = () => {
// // //         let errorsCopy = {};
// // //         Object.keys(formData).forEach((key) => {
// // //             validateField(key, formData[key]);
// // //             if (!formData[key]) {
// // //                 errorsCopy[key] = "This field is required";
// // //             }
// // //         });
// // //         setErrors(errorsCopy);

// // //         // ✅ return whether form is valid
// // //         return Object.keys(errorsCopy).length === 0;
// // //     };

// // //     const onSignup = async () => {
// // //         if (!validateForm()) return;

// // //         try {
// // //             // ✅ do not send confirmPassword to backend
// // //             const { confirmPassword, ...userData } = formData;

// // //             const response = await axios.post('http://localhost:5000/signup', userData); // 🔗 must match backend

// // //             alert(response.data.message);

// // //             // ✅ store signed-up user in localStorage (optional, useful for prefill in login)
// // //             localStorage.setItem("user", JSON.stringify(userData));

// // //             // ✅ redirect to login page and pass user (optional)
// // //             navigate("/login", { state: userData });

// // //         } catch (error) {
// // //             // ❌ show API error (e.g., duplicate email)
// // //             setErrors({ apiError: error.response?.data?.message || "Signup failed" });
// // //         }
// // //     };

// // //     return (
// // //         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
// // //             <div className="card shadow-lg p-4" style={{ width: "400px" }}>
// // //                 <h2 className="text-center mb-4">Signup</h2>

// // //                 <form>
// // //                     {/* 🔁 Reusable Input component */}
// // //                     <Input title="Username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} error={errors.username} touched={touched.username} />
// // //                     <Input title="Name" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} error={errors.name} touched={touched.name} />
// // //                     <Input title="Email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} error={errors.email} touched={touched.email} />
// // //                     <Input title="Password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} error={errors.password} touched={touched.password} />
// // //                     <Input title="Confirm Password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} touched={touched.confirmPassword} />
// // //                     <Input title="Phone" id="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} touched={touched.phone} />

// // //                     <button type="button" className="btn btn-primary mt-3" onClick={onSignup}>
// // //                         Signup
// // //                     </button>
// // //                 </form>

// // //                 {/* 🔥 API error */}
// // //                 {errors.apiError && <p className="text-danger">{errors.apiError}</p>}

// // //                 {/* 🔁 Navigate to login page */}
// // //                 <p className="mt-2">
// // //                     Already have an account?{" "}
// // //                     <button className="btn btn-link p-0" onClick={() => navigate("/login")}>
// // //                         Login
// // //                     </button>
// // //                 </p>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Signup;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import Input from './Input';
// // import {
// //     userNameValidation,
// //     emailValidation,
// //     passwordValidation,
// //     confirmPasswordValidation,
// //     phoneValidation
// // } from './Validation';

// // const Signup = () => {
// //     const navigate = useNavigate();
// //     const [formData, setFormData] = useState({
// //         username: '',
// //         name: '',
// //         email: '',
// //         password: '',
// //         confirmPassword: '',
// //         phone: ''
// //     });
// //     const [errors, setErrors] = useState({});
// //     const [touched, setTouched] = useState({});

// //     const handleChange = (e) => {
// //         const { id, value } = e.target;
// //         setFormData({ ...formData, [id]: value });
// //         setTouched({ ...touched, [id]: true });
// //         validateField(id, value);
// //     };

// //     const validateField = (id, value) => {
// //         let validationResponse;
// //         switch (id) {
// //             case "username":
// //                 validationResponse = userNameValidation(value);
// //                 break;
// //             case "email":
// //                 validationResponse = emailValidation(value);
// //                 break;
// //             case "password":
// //                 validationResponse = passwordValidation(value);
// //                 break;
// //             case "confirmPassword":
// //                 validationResponse = confirmPasswordValidation(value, formData.password);
// //                 break;
// //             case "phone":
// //                 validationResponse = phoneValidation(value);
// //                 break;
// //             default:
// //                 validationResponse = { isValid: true, message: "" };
// //         }
// //         setErrors(prev => ({ ...prev, [id]: validationResponse.message }));
// //     };

// //     const validateForm = () => {
// //         const newErrors = {};
// //         Object.keys(formData).forEach((key) => {
// //             if (!formData[key]) {
// //                 newErrors[key] = "This field is required";
// //             }
// //             validateField(key, formData[key]);
// //         });
// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const onSignup = async () => {
// //         if (!validateForm()) return;
// //         try {
// //             const { confirmPassword, ...userData } = formData;
// //             const response = await axios.post('http://localhost:5000/signup', userData);

// //             alert(response.data.message);
// //             localStorage.setItem("token", response.data.token); // assume backend sends a token
// //             localStorage.setItem("user", JSON.stringify(response.data.user));

// //             navigate("/home");
// //         } catch (error) {
// //             setErrors({ apiError: error.response?.data?.message || "Signup failed" });
// //         }
// //     };

// //     return (
// //         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
// //             <div className="card shadow-lg p-4" style={{ width: "400px" }}>
// //                 <h2 className="text-center mb-4">Signup</h2>
// //                 <form>
// //                     <Input title="Username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} error={errors.username} touched={touched.username} />
// //                     <Input title="Name" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} error={errors.name} touched={touched.name} />
// //                     <Input title="Email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} error={errors.email} touched={touched.email} />
// //                     <Input title="Password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} error={errors.password} touched={touched.password} />
// //                     <Input title="Confirm Password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} touched={touched.confirmPassword} />
// //                     <Input title="Phone" id="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} touched={touched.phone} />
// //                     <button type="button" className="btn btn-primary mt-3" onClick={onSignup}>Signup</button>
// //                 </form>
// //                 {errors.apiError && <p className="text-danger mt-2">{errors.apiError}</p>}
// //                 <p className="mt-2">Already have an account?{" "}
// //                     <button className="btn btn-link p-0" onClick={() => navigate("/login")}>
// //                         Login
// //                     </button>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Signup;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import Input from './Input';
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//     userNameValidation,
//     emailValidation,
//     passwordValidation,
//     confirmPasswordValidation,
//     phoneValidation
// } from "./Validation";

// const Signup = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: '',
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         phone: ''
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({ ...formData, [id]: value });
//         setErrors({ ...errors, [id]: "" });
//     };

//     const validateForm = () => {
//         let errorsCopy = {};

//         const usernameCheck = userNameValidation(formData.username);
//         if (!usernameCheck.isValid) errorsCopy.username = usernameCheck.message;

//         const nameCheck = formData.name ? null : "Name is required";
//         if (nameCheck) errorsCopy.name = nameCheck;

//         const emailCheck = emailValidation(formData.email);
//         if (!emailCheck.isValid) errorsCopy.email = emailCheck.message;

//         const passwordCheck = passwordValidation(formData.password);
//         if (!passwordCheck.isValid) errorsCopy.password = passwordCheck.message;

//         const confirmPasswordCheck = confirmPasswordValidation(formData.confirmPassword, formData.password);
//         if (!confirmPasswordCheck.isValid) errorsCopy.confirmPassword = confirmPasswordCheck.message;

//         const phoneCheck = phoneValidation(formData.phone);
//         if (!phoneCheck.isValid) errorsCopy.phone = phoneCheck.message;

//         setErrors(errorsCopy);
//         return Object.keys(errorsCopy).length === 0;
//     };

//     const onSignup = async () => {
//         if (!validateForm()) return;

//         try {
//             const { confirmPassword, ...dataToSend } = formData;

//             const res = await axios.post("http://localhost:5000/signup", dataToSend);
//             alert(res.data.message);
//             navigate("/login");
//         } catch (error) {
//             setErrors({ apiError: error.response?.data?.message || "Signup failed" });
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <div className="card shadow-lg p-4" style={{ width: "400px" }}>
//                 <h3 className="text-center mb-3">Signup</h3>
//                 <form>
//                     <Input title="Username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} error={errors.username} />
//                     <Input title="Name" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} error={errors.name} />
//                     <Input title="Email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} error={errors.email} />
//                     <Input title="Password" id="password" type="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} error={errors.password} />
//                     <Input title="Confirm Password" id="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
//                     <Input title="Phone" id="phone" type="tel" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} />

//                     <button type="button" className="btn btn-primary mt-3 w-100" onClick={onSignup}>
//                         Signup
//                     </button>

//                     {errors.apiError && <p className="text-danger text-center small mt-2">{errors.apiError}</p>}
//                 </form>

//                 <p className="text-center mt-3 small">
//                     Already have an account?{" "}
//                     <button className="btn btn-link p-0 small" onClick={() => navigate("/login")}>
//                         Login
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Valid 10-digit phone number is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSignup = async () => {
        if (!validateForm()) return;

        try {
            const { confirmPassword, ...payload } = formData;
            const response = await axios.post("http://localhost:5000/signup", payload);

            alert(response.data.message);
            navigate("/login");
        } catch (err) {
            const msg = err.response?.data?.message || "Signup failed";
            setErrors({ apiError: msg });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-3">Signup</h3>

                {["username", "name", "email", "password", "confirmPassword", "phone"].map((field) => (
                    <div className="mb-2" key={field}>
                        <input
                            id={field}
                            type={field.toLowerCase().includes("password") ? "password" : "text"}
                            placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                            value={formData[field]}
                            onChange={handleChange}
                            className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                        />
                        {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                    </div>
                ))}

                {errors.apiError && <p className="text-danger small text-center">{errors.apiError}</p>}

                <button className="btn btn-primary w-100 mt-2" onClick={onSignup}>
                    Signup
                </button>

                <p className="text-center mt-3 small">
                    Already have an account?{" "}
                    <button className="btn btn-link p-0" onClick={() => navigate("/login")}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;

