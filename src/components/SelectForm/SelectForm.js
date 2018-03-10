import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Organization from '../../assets/images/selectForms/Organizacion.svg';
import Old from '../../assets/images/selectForms/Anciano.svg';
import Volunteer from '../../assets/images/selectForms/voluntario.svg';

import './SelectForm.css';

class SelectForm extends Component {
  state = {};
  render() {
    return (
      <Grid className="selectGrid">
        <Row>
          <Col md={4}>
            <Image src={Old} />
          </Col>
          <Col md={4}>
            <Image src={Organization} />
          </Col>
          <Col md={4}>
            <Image src={Volunteer} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SelectForm;
