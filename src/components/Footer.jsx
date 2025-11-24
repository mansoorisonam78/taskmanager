import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="footer bg-dark text-light py-4 mt-5">
    <Container>
      <Row>
        <Col md={4} className="mb-3 mb-md-0">
          <h5 className="fw-bold">Task-Whiz</h5>
          <p className="small">
            Simplify your workday with smart task management. Plan, organize, and execute seamlessly.
          </p>
        </Col>
        <Col md={4} className="mb-3 mb-md-0">
          <h6 className="fw-bold">Quick Links</h6>
          <ul className="list-unstyled small">
            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
            <li><a href="#" className="text-light text-decoration-none">Dashboard</a></li>
            <li><a href="#" className="text-light text-decoration-none">About</a></li>
            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h6 className="fw-bold">Contact Us</h6>
          <p className="small mb-1">📧 support@taskwhiz.com</p>
          <p className="small mb-1">📞 +91 98765 43210</p>
          <p className="small">© {new Date().getFullYear()} Task-Whiz. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;