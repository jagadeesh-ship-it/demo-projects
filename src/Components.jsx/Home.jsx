import React from 'react';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userDetails');
        navigate('/login');
    };
    return (
        <div>
            {/* Navigation Bar */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>School Management System</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Button variant="outline-light" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            {/* Main Content */}
            <Container className="mt-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome to the School Management System</Card.Title>
                        <Card.Text>
                            Our system helps you manage student registrations, teacher details, attendance records,
                            grades, and more, all in one efficient platform.
                        </Card.Text>
                        {/* Additional navigation buttons */}
                        {/* <div>
                  <Button variant="primary" className="me-2" onClick={() => navigate('/signup')}>
                    Sign Up
                  </Button>
                  <Button variant="secondary" onClick={() => navigate('/login')}>
                    Sign In
                  </Button>
                </div> */}
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Home;




