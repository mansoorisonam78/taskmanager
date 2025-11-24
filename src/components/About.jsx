import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <section className="py-5 bg-white">
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold text-primary">About Task-Whiz</h2>
          <p className="text-secondary">
            Task-Whiz is designed to simplify your workday by providing smart task management tools.
            Our mission is to help individuals and teams plan, organize, and execute tasks seamlessly.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h5 className="fw-bold">Our Vision</h5>
          <p>Empowering productivity through intuitive design and seamless collaboration.</p>
        </Col>
        <Col md={4}>
          <h5 className="fw-bold">Our Mission</h5>
          <p>To provide tools that make task management effortless and enjoyable.</p>
        </Col>
        <Col md={4}>
          <h5 className="fw-bold">Our Values</h5>
          <p>Innovation, simplicity, and teamwork drive everything we build.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;