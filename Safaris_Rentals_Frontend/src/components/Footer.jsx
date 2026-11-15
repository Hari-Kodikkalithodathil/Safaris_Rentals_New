import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <footer className='footer-section'>
        <Container>
            <Row className='g-4'>
                {/* Brand Information */}
                <Col md={6} lg={3}>
                    <h5>Safaris Rentals</h5>
                    <p>
                        Your journey, our vehicles.
                        Enjoy a comfortable and convenient
                        rental experience.
                    </p>
                </Col >
                {/* Quick Links */}
                <Col md={6} lg={3}>
                    <h5>Quick Links</h5>

                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                </Col>
                {/* Social Media */}
                <Col>
                    <h5>Contact Us</h5>
                    <p>Email: info@safarisrentals.com</p>
                    <p>Phone: +91 XXXXX XXXXX</p>
                    <p>Location: Kerala, India</p>
                </Col>
                <Col>
                    <h5>Follow Us</h5>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </Col>
            </Row>
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Safaris Rentals.
                    All rights reserved.
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
