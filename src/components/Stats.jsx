import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const stats = [
  { label: 'Happy Users', value: '5,200+' },
  { label: 'Paid Users', value: '4,500+' },
  { label: 'Viewers', value: '10,000+' },
  { label: 'Total Tasks', value: '15,000+' }
];

const Stats = () => (
  <Container className="py-5">
    <Row>
      {stats.map((stat, index) => (
        <Col key={index} xs={6} md={3} className="mb-4">
          <Card className="text-center p-4 shadow-sm">
            <h2 className="text-primary">{stat.value}</h2>
            <p className="mb-0">{stat.label}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Stats;