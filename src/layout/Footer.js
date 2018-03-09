import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ReactSVG from 'react-svg';
import ulpgcLogo from '../assets/images/logos/ulpgc.png';
import ccLogo from '../assets/images/logos/cc.svg';
import socialMediaLogos from '../assets/images/social/redesSociales.svg';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer style={{ background: 'gray' }}>
        <Grid fluid>
          <Row>
            <ReactSVG path={socialMediaLogos} />
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              {' '}
              <ul className="list-unstyled">
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              {' '}
              <ul className="list-unstyled">
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
                <li> Link </li>
              </ul>
            </Col>
            <Col xs={12} md={12} lg={4}>
              {' '}
              <Image width="300" height="100" src={ulpgcLogo} alt="" responsive />
              <ReactSVG path={ccLogo} />
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
