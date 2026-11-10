import React from 'react'
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <BootstrapNavbar bg="dark" variant="dark" expand="lg">
        <Container>
            <BootstrapNavbar.Brand as={Link} to="/">
            Safaris Rentals
            </BootstrapNavbar.Brand>

            <BootstrapNavbar.Toggle aria-controls="main-navbar" />

            <BootstrapNavbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
            </BootstrapNavbar.Collapse>
        </Container>
    </BootstrapNavbar>

    </div>
  )
}

export default Navbar
