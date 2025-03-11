// import React, { useState } from 'react';
// //import { Link, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// const Signup = ({ onSwitchToLogin }) => {

//     //const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const [message, setMessage] = useState('');

//     const usernameRegex = /^[A-Za-z0-9](?:[A-Za-z0-9_-]{6,14})[A-Za-z0-9]$/;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/;
//     const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;

//     const handleSignup = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert('password do not match!');
//             return;
//         }
//         if (!usernameRegex.test(username)) {
//             alert('Username must be 8-16 characters long, alphanumeric (with "-" or "_" allowed in the middle), and cannot start or end with a special character.');
//             return;
//         }
//         if (!emailRegex.test(email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }
//         if (!passwordRegex.test(password)) {
//             alert('Password must be 8-16 characters long, include at least one capital letter, one number, and one special character.');
//             return;
//         }
//         if (!phoneRegex.test(phone)) {
//             alert('Please enter a valid Indian phone number (e.g., +919550847843 or 9550847843).');
//             return;
//         }
//         const userDetails = { name, username, email, password, phone };
//         localStorage.setItem('userDetails', JSON.stringify(userDetails));
//         setMessage('Signup Successful! Please login.');
//         setName('');
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setPhone('');
//     };
//     return (
//         <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
//             <div>
//                 <Button variant="primary" className="me-3" onClick={(handleSignup) }>
//                     Sign Up
//                 </Button>
//                 <Button variant="secondary" onClick={(onSwitchToLogin) }>
//                     login
//                 </Button>
//             </div>
//             <h2 className="mb-4">Sign Up</h2>
//             <form onSubmit={handleSignup}>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         placeholder=" "
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
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
//                         placeholder=" "
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Confirm Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Phone Number</label>
//                     <input
//                         type="tel"
//                         className="form-control"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                         placeholder=" "
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Sign Up</button>
//             </form>
//             {/* <p className="mt-3">
//                 Already have an account? <Link to="/Login">Login</Link>
//             </p> */}
//             <p className="mt-3">

//                 Already have an account? <button className="btn btn-link" onClick={onSwitchToLogin}>Login</button>
//             </p>

//             {message && <div className="alert alert-info mt-3">{message}</div>}
//         </div>
//     );
// };

// export default Signup;

    // import React, { useState} from 'react';
    // import Input from './Input';

    // const Signup = ({setView}) => {

    //     const [username, setUsername] = useState('');
    //     const [name, setName] = useState('');
    //     const [email, setEmail] = useState('');
    //     const [password, setPassword] = useState('');
    //     const [confirmpassword, setConfirmPassword] = useState('');
    //     const [phone, setPhone] = useState('');
    //     const [errors, setErrors] = useState({});


    //     const validateUsername = (username) => /^[A-Za-z0-9](?:[A-Za-z0-9_-]{6,14})[A-Za-z0-9]$/.test(username);
    //     const validateEmail = (email) =>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    //     const validatePassword = (password) =>/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/.test(password);
    //     const validatePhone = (phone) => /^(?:\+91)?[6-9]\d{9}$/.test(phone);

    //     const onSignup = () =>
    //     {
    //         let errorsCopy = {};
    //         if (!username) errorsCopy.username ="username is required";
    //         if(!name)  errorsCopy.name ="name is required";
    //         if(!email || !validateEmail(email)) errorsCopy.email = "enter a valid email";
    //         if(!password || !validatePassword(password)) errorsCopy.password ="password must be atleast 8 to 16 characters and 1cap and 1 small and one special character";
    //         if(password !== confirmpassword) errors.copyconfirmPassword ="password did not match";
            
    //         setErrors(errorsCopy);
    //         if(Object.Keys(errorsCopy). length === 0){
    //             alert("Signup succesful");
    //             setView("Login");

    //         }

    //     };

    // return( 
    //     <>
    //     <h2>Signup</h2> 
    //     <Input title="Username" id="username" placeholder = "Enter username" value ={username} sethangeValue={setUsername} error={errors.username}/>
    //     <Input title="Name"  id= "name"  placeholder = "enter name" value = {name} setChangeValue ={setName} error={errors.name}/>
    //     <Input title="Email" id ="email" placeholder= "enter email" value ={email}  setChangeValue ={setEmail} error={errors.email}/>
    //     <Input title="Password" id="password" placeholder="Enter password" type="password" value={password} setChangeValue={setPassword} error={errors.password} />
    //    <Input title="confirmPassword" id="confirmPassword" placeholder="confirm password" type="password" value={confirmpassword} setChangeValue={setConfirmPassword} error={errors.confirmPassword} />
    //    <Input title ="Phone" id="phone" placeholder ="enter phone number" type= "tect" value={phone} setChangeValue={setPassword} erros={errors.phone}/>  

    //    <button className='btn-btn-primary' onClick={onSignup}>Signup</button>
    //    <button className='btn-btn-secondary' style={{marginLeft: "5x"}} onClick = {() => setView("Login")}>Already have an account ? Login</button>
    //     </>

    // );


    // };
    // export default Signup;


import React, { useState } from 'react';
import Input from './Input';

const Signup = ({ setView }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const validateUsername = (username) => /^[A-Za-z0-9](?:[A-Za-z0-9_-]{6,14})[A-Za-z0-9]$/.test(username);
    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/.test(password);
    const validatePhone = (phone) => /^(?:\+91)?[6-9]\d{9}$/.test(phone);

    const onSignup = () => {
        let errorsCopy = {};

        if (!username) errorsCopy.username = "Username is required";
        if (!name) errorsCopy.name = "Name is required";
        if (!email || !validateEmail(email)) errorsCopy.email = "Enter a valid email";
        if (!password || !validatePassword(password)) errorsCopy.password = "Password must be 8-16 chars, 1 uppercase, 1 number, and 1 special character";
        if (password !== confirmPassword) errorsCopy.confirmPassword = "Passwords do not match";
        if (!phone || !validatePhone(phone)) errorsCopy.phone = "Enter a valid phone number";

        setErrors(errorsCopy);

        if (Object.keys(errorsCopy).length === 0) {
            alert("Signup successful!");
            //setView("login");
        }
    };

    return (
        <>
            <h2>Signup</h2>
            <Input title="Username" id="username" placeholder="Enter username" value={username} onChange={setUsername} error={errors.username} />
            <Input title="Name" id="name" placeholder="Enter name" value={name} onChange={setName} error={errors.name} />
            <Input title="Email" id="email" placeholder="Enter email" value={email} onChange={setEmail} error={errors.email} />
            <Input title="Password" id="password" placeholder="Enter password" type="password" value={password} onChange={setPassword} error={errors.password} />
            <Input title="Confirm Password" id="confirmPassword" placeholder="Confirm password" type="password" value={confirmPassword} onChange={setConfirmPassword} error={errors.confirmPassword} />
            <Input title="Phone" id="phone" placeholder="Enter phone number" type="text" value={phone} onChange={setPhone} error={errors.phone} />

            <button className='btn btn-primary' onClick={onSignup}>Signup</button>
            <br />
    
            <p className="bottom-text">
                <span>Already have an account? </span>
                <span className="link-text" onClick={() => setView("login")}>Login</span>
            </p>
        </>
    );
};

export default Signup;

