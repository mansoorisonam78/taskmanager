import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';


const NavigationBar = () => (
  <Navbar expand="lg" className="navbar-custom shadow-sm">
    <Container>
      {/* Logo with custom font */}
      <Navbar.Brand as={Link} to="/" className="logo-font">
        Task-Whiz
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        {/* Centered nav links */}
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
        </Nav>

        {/* Right side buttons */}
        <div className="d-flex ms-auto">
          <Button as={Link} to="/login" variant="outline-primary" className="me-2">
            Login
          </Button>
          <Button as={Link} to="/signup" variant="primary">
            Signup
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;