import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './Navigation';

export const Welcome = () => {
    return (
        <Container fluid>
        <Row>
        <Col>
        <Navigation />

        </Col>
        </Row>
        </Container>
    )
  }