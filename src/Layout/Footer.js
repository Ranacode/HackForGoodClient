import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer style={{ background: 'gray' }}>
        <Row>Social media</Row>
        <Row>
          <Col xs={12} md={6} lg={4}>
            {' '}
            Links 1
          </Col>
          <Col xs={12} md={6} lg={4}>
            {' '}
            Links 2
          </Col>
          <Col xs={12} md={12} lg={4}>
            {' '}
            Logos{' '}
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
