import React, { Component } from 'react';

import { Grid, Row, Col, Image } from 'react-bootstrap';
import Activity1 from '../../assets/images/activity1.jpg';
import Activity2 from '../../assets/images/activity2.jpg';
import Activity3 from '../../assets/images/activity3.jpg';

import './activities.css';

class Activities extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: '5%' }}>
        <h1>Actividades</h1>
        <Grid fluid>
          <Row>
            <Col className="nopadding" xs={12} md={6} lg={6}>
              <Image width="951.5" height="530" src={Activity1} responsive />
            </Col>
            <Col className="nopadding" xs={12} md={6} lg={6}>
              <Image width="951.5" height="530" src={Activity2} responsive />
            </Col>
          </Row>
          <Row>
            <Col className="nopadding" xs={12} md={6} lg={6}>
              <Image width="951.5" height="530" src={Activity3} responsive />
            </Col>
            <Col className="nopadding" xs={12} md={6} lg={6}>
              <Image width="951.5" height="530" src={Activity1} responsive />
            </Col>
          </Row>
          <Row>
            <Col className="nopadding" xs={12} md={6} lg={6}>
              <Image width="950.5" height="530" src={Activity2} responsive />
            </Col>
            <Col className="nopadding" xs={12} md={6} lg={6}>
              <Image width="950.5" height="530" src={Activity3} responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Activities;
