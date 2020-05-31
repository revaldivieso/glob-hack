import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './Navigation';
import './Home.css';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to='/login' />;
  }
  return (
    <Container fluid className='content'>
      <header>
        <Navigation />
      </header>
      <section>
        <Row>
          <Col>
            <div className='week'>
              <li>L</li>
              <li>M</li>
              <li>W</li>
              <li>J</li>
              <li>V</li>
              <li>S</li>
              <li>D</li>
            </div>
            <div className='numbers'>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </div>
            <div className='info'>
              <h3>Período</h3>
              <h1>Faltan 6 días</h1>
              <h4>
                Posibilidad de embarazo: <span>Baja</span>
              </h4>
            </div>
            <div className='btns'>
              <button className='symptoms' type='submit' to='/sintomas'>
                <Link to='/sintomas'> REGISTRAR SÍNTOMAS</Link>
              </button>
              <button className='period'>REGISTRAR PERÍODO</button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};
export default Home;
