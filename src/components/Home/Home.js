import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CustomCarousel from '../Carousel/Carousel';
import './home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: '5%', textAlign: 'center' }}>
        <h1> INICIO</h1>
        <Grid>
          <Row>
            <CustomCarousel />
          </Row>
          <Row className="row">
            <Col xs={12} md={6} lg={6}>
              <h2> Nuestro objetivo </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.{' '}
              </p>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <h2>Nuestros valores</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.{' '}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
