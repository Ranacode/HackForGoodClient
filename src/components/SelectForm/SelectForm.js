import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import defaultImage from '../../assets/images/selectForms/defaultForm.jpg';
import './SelectForm.css';

class SelectForm extends Component {
  state = {};
  render() {
    return (
      <Grid className="selectGrid">
        <Row>
          <Col md={4}>
            <Image alt="defaultImage" src={defaultImage} thumbnail responsive />
          </Col>
          <Col md={4}>
            <Image alt="defaultImage" src={defaultImage} thumbnail responsive />
          </Col>
          <Col md={4}>
            <Image alt="defaultImage" src={defaultImage} thumbnail responsive />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SelectForm;
