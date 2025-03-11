// import React, { useState } from 'react';
// //import { Link, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// const Login = (onSwitchToSignup) => {
//     const [identifier, setIdentifier] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const storedData = localStorage.getltem('useDetails');
//         if (!storedData) {
//             setMessage('No user found. Please sign up first.');
//             return;
//         }
//         const { username, email, password: storedPassword } = JSON.parse(storedData);
//         if ((identifier === username || identifier === email) && password === storedPassword) {
//             setMessage('Login Successful!');
//             setTimeout(() => {
//                 navigate('/');
//             }, 1500);
//         } else {
//             setMessage('invalid details. Please try again.');
//         }

//     };
//     return (
//         <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
//             <h2 className="mb-4">Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div className="mb-3">
//                     <label className="form-label">Username or Email</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={identifier}
//                         onChange={(e) => setIdentifier(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <Button type="submit" variant="primary">Login</Button>
//             </form>
//             {message && (
//                 <div className={`alert mt-3 ${message === 'Login Successful!' ? 'alert-success' : 'alert-danger'}`}>
//                     {message}
//                 </div>
//             )}
//             <p className="mt-3">
//                 Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import Input from './Input';

// const Login = ({ setView }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});

//     const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

//     const onLogin = () => {
//         let errorsCopy = {};

//         if (!email || !validateEmail(email)) errorsCopy.email = "Enter a valid email";
//         if (!password) errorsCopy.password = "Password is required";

//         setErrors(errorsCopy);
//         if (Object.keys(errorsCopy).length === 0) {
//             alert("Login Successful!");
//         }
//     };

//     return (
//         <>
//             <h2>Login</h2>
//             <Input title="Email" id="email" placeholder="Enter email" value={email} setChangeValue={setEmail} error={errors.email} />
//             <Input title="Password" id="password" placeholder="Enter password" type="password" value={password} setChangeValue={setPassword} error={errors.password} />

//             <button className='btn btn-primary' onClick={onLogin}>Login</button>
//             <button className='btn btn-secondary' style={{ marginLeft: "5px" }} onClick={() => setView("signup")}>Don't have an account? Signup</button>
//         </>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import Input from './Input';

const Login = ({ setView }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const onLogin = () => {
        let errorsCopy = {};

        if (!email || !validateEmail(email)) errorsCopy.email = "Enter a valid email";
        if (!password) errorsCopy.password = "Password is required";

        setErrors(errorsCopy);
        if (Object.keys(errorsCopy).length === 0) {
            alert("Login Successful!");
            
        }
    };

    return (
        <>
            <h2>Login</h2>

            <Input title="Email" id="email" placeholder="Enter email" value={email} onChange={setEmail} error={errors.email} />
            <Input title="Password" id="password" placeholder="Enter password" type="password" value={password} onChange={setPassword} error={errors.password} />

            <button className='btn btn-primary' onClick={onLogin}>Login</button>
            <br />

            <p className="bottom-text">
                <span>Don't have an account? </span>
                <span className="link-text" onClick={() => setView("signup")}>Signup</span>
            </p>
        </>
    );
};

export default Login;
