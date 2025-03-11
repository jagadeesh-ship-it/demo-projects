// 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login  from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Signup");

  // Page mapping
  const pages = {
   
    Signup: <Signup />,
    Login: <Login />,
    Home: <Home />,
  };

  return (
    <div>
      {/* Simple Navigation */}
      <nav className="p-3 bg-dark text-light">
        <button className="btn btn-light me-2" onClick={() => setCurrentPage("Home")}>Home</button>
        <button className="btn btn-light me-2" onClick={() => setCurrentPage("Signup")}>Sign Up</button>
        <button className="btn btn-light" onClick={() => setCurrentPage("Login")}>Login</button>
      </nav>

      {/* Render the selected page dynamically */}
      {pages[currentPage] || <Signup />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


//reportWebVitals();
 



