import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Hero = () => (
  <>
    {/* 1. Hero Section */}
    <section className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="display-6 fw-bold mb-3 text-blue">Task-Whiz</h5>
            <p className="lead mb-4 text-secondary">
              Simplify Your Workday with Smart Task Management.<br />
              Plan, organize, and execute tasks effortlessly with our intuitive tools—
              set priorities, track progress, and meet deadlines seamlessly.
            </p>
            <Button variant="primary" size="lg">Get Started</Button>
          </Col>
          <Col md={6}>
            <img src="/images/image1.png" alt="Teamwork" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>


     <section className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
           <Col md={6}>
            <img src="/images/image2.png" alt="Teamwork" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h5 className="display-6 fw-bold mb-3 text-blue">Create and Manage <br/>
             Tasks Effortlessly</h5>
            <p className="lead mb-4 text-secondary">
             Add tasks with just a few clicks, assign deadlines, set <br />
             priorities, and track progress in real time.
            </p>
            
          
          </Col>

        </Row>
      </Container>
    </section>
     <section className="hero-section py-5 bg-light">
      <Container >
        <Row className="align-items-center"
       >
          <Col md={6}>
            <div  className="text aos-init aos-animate" data-aos="fade-right">
              <h5 className="display-6 fw-bold mb-3 text-blue">Read and Stay on
              <br/>
Top of Every Task

           </h5>
            <p className="lead mb-4 text-secondary">
           Quickly review task details, deadlines, and 
           <br/>priorities in
one organized view.

            </p>
         </div>          </Col>
          <Col md={6}>
          <div class="img aos-init aos-animate" data-aos="fade-left">
             <img src="/images/image3.png" alt="Teamwork" className="img-fluid" />
          </div>
           
          </Col>
        </Row>
      </Container>
    </section>
     <section className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="display-6 fw-bold mb-3 text-blue">Task-Whiz</h5>
            <p className="lead mb-4 text-secondary">
              Simplify Your Workday with Smart Task Management.<br />
              Plan, organize, and execute tasks effortlessly with our intuitive tools—
              set priorities, track progress, and meet deadlines seamlessly.
            </p>
           
          </Col>
          <Col md={6}>
            <img src="/images/image4.png" alt="Teamwork" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>

    

    {/* 2. Features Section */}
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-primary">Features</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h5 className="fw-bold text-dark">Easy Task Creation</h5>
                <p>Create and edit tasks in seconds with a clean interface.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h5 className="fw-bold text-dark">Priority & Reminders</h5>
                <p>Stay on top of deadlines with smart reminders.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h5 className="fw-bold text-dark">Collaboration</h5>
                <p>Work together with your team seamlessly.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    {/* 3. How It Works Section */}
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-primary">How It Works</h2>
        <Row>
          <Col md={4}><p>1️⃣ Sign up and create your workspace.</p></Col>
          <Col md={4}><p>2️⃣ Add tasks, set priorities, and deadlines.</p></Col>
          <Col md={4}><p>3️⃣ Track progress and collaborate with your team.</p></Col>
        </Row>
      </Container>
    </section>

    {/* 4. Stats Section */}
    <section className="stats-section py-5">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h2>10K+</h2>
            <p>Tasks Completed</p>
          </Col>
          <Col md={4}>
            <h2>5K+</h2>
            <p>Happy Users</p>
          </Col>
          <Col md={4}>
            <h2>99%</h2>
            <p>On-time Delivery</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* 5. Testimonials Section */}
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-primary">What Users Say</h2>
        <Row>
          <Col md={6}>
            <blockquote className="blockquote">
              <p>"Task-Whiz has transformed how our team works!"</p>
              <footer className="blockquote-footer">Priya, Project Manager</footer>
            </blockquote>
          </Col>
          <Col md={6}>
            <blockquote className="blockquote">
              <p>"Simple, effective, and reliable task management."</p>
              <footer className="blockquote-footer">Rahul, Developer</footer>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>

    {/* 6. Pricing Section */}
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-primary">Pricing</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h5 className="fw-bold">Free</h5>
                <p>Basic features for individuals.</p>
                <Button variant="outline-primary">Choose Free</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h5 className="fw-bold">Pro</h5>
                <p>Advanced tools for professionals.</p>
                <Button variant="primary">Choose Pro</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h5 className="fw-bold">Team</h5>
                <p>Collaboration features for teams.</p>
                <Button variant="success">Choose Team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    {/* 7. Call to Action Section */}
    <section className="py-5 bg-primary text-light text-center">
      <Container>
        <h2 className="fw-bold mb-3">Ready to Boost Productivity?</h2>
        <p className="mb-4">Join thousands of users who trust Task-Whiz.</p>
        <Button variant="light" size="lg">Get Started Now</Button>
      </Container>
    </section>
    {/* ⭐ Reviews Section */}
<section className="py-5 bg-white">
  <Container>
    <h2 className="text-center fw-bold mb-4 text-primary">User Reviews</h2>
    <Row>
      <Col md={4}>
        <Card className="shadow-sm mb-3">
          <Card.Body>
            <h5 className="fw-bold text-dark">Priya S.</h5>
            <p className="text-secondary">
              ⭐⭐⭐⭐⭐ <br />
              "Task-Whiz makes my day so much easier. I can track tasks and deadlines without stress!"
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="shadow-sm mb-3">
          <Card.Body>
            <h5 className="fw-bold text-dark">Rahul K.</h5>
            <p className="text-secondary">
              ⭐⭐⭐⭐☆ <br />
              "Clean design and simple to use. Collaboration features are a lifesaver for our team projects."
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="shadow-sm mb-3">
          <Card.Body>
            <h5 className="fw-bold text-dark">Ananya M.</h5>
            <p className="text-secondary">
              ⭐⭐⭐⭐⭐ <br />
              "I love the reminders and progress tracking. It keeps me motivated and productive every day."
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>
  </>
);

export default Hero;