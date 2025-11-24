import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <Navbar expand="lg" bg="white" className="shadow-sm">
    <Container>
      <Navbar.Brand as={Link} to="/">Task-Whiz</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <div className="d-flex">
          <Button variant="outline-primary" className="me-2">Login</Button>
          <Button variant="primary">Signup</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;