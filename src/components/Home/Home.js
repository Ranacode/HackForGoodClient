import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CustomCarousel from '../Carousel/Carousel';
import './home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> INICIO</h1>
        <Grid>
          <Row>
            <CustomCarousel />
          </Row>
          <Row className="row">
            <Col xs={12} md={6} lg={8}>
              <h2> ¿Qué hacemos? </h2>
              <p>párrafo</p>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <h2>Nuestros valores</h2>
              <p>párrafo</p>
            </Col>
          </Row>
          <Row className="row">
            <h2> Nuestro equipo </h2>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
          </Row>
          <Row className="row">
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
          </Row>
          <Row className="row">
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src="" alt="imagenEquipo" />
            </Col>
          </Row>
          <Row className="row">
            <h2> Nuestra historia</h2>
            <p>párrafo</p>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
