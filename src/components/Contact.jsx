import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section className="py-5 bg-light">
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold text-primary">Contact Us</h2>
          <p className="text-secondary">
            Have questions or feedback? Fill out the form below and we’ll get back to you soon.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h5 className="fw-bold">Our Office</h5>
          <p>📍 Indore, MP, India</p>
          <p>📧 support@taskwhiz.com</p>
          <p>📞 +91 98765 43210</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;