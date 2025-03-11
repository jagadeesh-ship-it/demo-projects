// // import React from 'react';
// // import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
// // //import { useNavigate } from 'react-router-dom';




// // const Home = () => {
// //     const navigate = useNavigate();
// //     const handleLogout = () => {
// //         localStorage.removeItem('userDetails');
// //         navigate('/Login');
// //     };
// //     return ( 
// //         <div>
// //             {/* Navigation Bar */}
// //             <Navbar bg="dark" variant="dark">
// //                 <Container>
// //                     <Navbar.Brand>Ecommerce Website</Navbar.Brand>
// //                     <Nav className="ms-auto">
// //                         <Button variant="outline-light" onClick={handleLogout}>
// //                             Logout
// //                         </Button>
// //                     </Nav>
// //                 </Container>
// //             </Navbar>

// //             {/* Main Content */}
// //             <Container className="mt-4">
// //                 <Card>
// //                     <Card.Body>
// //                         <Card.Title>Welcome to Ecommerce site</Card.Title>
// //                         <Card.Text>
// //                             Our system helps you to give you great shopping experience. You can view products, add to cart, place order, track
// //                             and more, all in one efficient platform.
// //                         </Card.Text>
// //                         {/* Additional navigation buttons */}
// //                         {/* <div>
// //                   <Button variant="primary" className="me-2" onClick={() => navigate('/signup')}>
// //                     Sign Up
// //                   </Button>
// //                   <Button variant="secondary" onClick={() => navigate('/login')}>
// //                     Sign In
// //                   </Button>
// //                 </div> */}
// //                     </Card.Body>
// //                 </Card>
// //             </Container>
// //         </div>
// //     );
// // };

// // export default Home;


// import React, { useState } from 'react';

// import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';

// const Home = () => {

//     const [currentView, setCurrentView] = useState('home');

//     const handleLogout = () => {

//         localStorage.removeItem('userDetails');

//         setCurrentView('login');

//     };

//     const renderView = () => {

//         switch (currentView) {

//             case 'home':

//                 return (
//                     <Container className="mt-4">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Welcome to the College Management System</Card.Title>
//                                 <Card.Text>

//                                     Our system helps you manage student registrations, teacher details, attendance records,

//                                     grades, and more, all in one efficient platform.
//                                 </Card.Text>
//                                 <div>
//                                     <Button variant="primary" className="me-2" onClick={() => setCurrentView('signup')}>

//                                         Sign Up
//                                     </Button>
//                                     <Button variant="secondary" onClick={() => setCurrentView('login')}>

//                                         Sign In
//                                     </Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Container>

//                 );

//             case 'signup':

//                 return <h2>Signup Page (To be implemented)</h2>;

//             case 'login':

//                 return <h2>Login Page (To be implemented)</h2>;

//             default:

//                 return <h2>Page Not Found</h2>;

//         }

//     };

//     return (
//         <div>

//             {/* Navigation Bar */}
//             <Navbar bg="dark" variant="dark">
//                 <Container>
//                     <Navbar.Brand>College Management System</Navbar.Brand>
//                     <Nav className="ms-auto">
//                         <Button variant="outline-light" onClick={handleLogout}>

//                             Logout
//                         </Button>
//                     </Nav>
//                 </Container>
//             </Navbar>

//             {renderView()}
//         </div>

//     );

// };

// export default Home;


import React from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () =>
{
 return(
    <> 
         <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">College Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Signup">Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Container className="mt-5 text-center">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1>Welcome to College Managment</h1>
                        <p className="lead">
                            This is a simple home page of college Management
                        </p>
                        <Button variant="primary" size="lg" href="/signup">
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Home;
    
 



