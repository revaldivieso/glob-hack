import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from './Auth';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './Navigation'
import './Home.css';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to='/login' />;
  }
  return (
    <Container fluid className="content">
      <header>
      <Navigation />
    </header>
        <Row>
        <Col>
        </Col>
        </Row>
        </Container>
  );
};
export default Home;
