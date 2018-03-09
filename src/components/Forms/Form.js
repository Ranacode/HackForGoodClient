import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SignupForm from './SignupForm';
import SelectForm from '../SelectForm/SelectForm';
import './Forms.css';

class Form extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <SelectForm />
        <Row className="show-grid">
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <SignupForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Form;
