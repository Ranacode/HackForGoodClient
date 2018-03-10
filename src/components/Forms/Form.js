import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SignupVolunteer from './SignupVolunteer';
import SignupOld from './SignupOld';
import SignupOrganization from './SignupOrganization';
import SelectForm from '../SelectForm/SelectForm';
import './Forms.css';

class Form extends Component {
  state = {
    actualForm: '',
  };
  showForm = (event) => {
    switch (event.target.name) {
      case 'old_form':
        this.setState({ actualForm: event.target.name });
        break;
      case 'organization_form':
        this.setState({ actualForm: event.target.name });
        break;
      case 'volunteer_form':
        this.setState({ actualForm: event.target.name });
        break;
      default:
        this.setState({ actualForm: '' });
    }
  };

  renderSelectedForm = () => {
    let component = '';
    switch (this.state.actualForm) {
      case 'old_form':
        component = <SignupOld />;
        break;
      case 'organization_form':
        component = <SignupOrganization />;

        break;
      case 'volunteer_form':
        component = <SignupVolunteer />;
        break;
      default:
        component = '';
    }
    return component;
  };

  render() {
    return (
      <Grid>
        <SelectForm selectedForm={this.state.actualForm} handleClick={this.showForm} />
        <Row className="show-grid">
          <Col xs={8} xsOffset={2} sm={8} smOffset={2} md={8} mdOffset={2} lg={4} lgOffset={4}>
            {this.renderSelectedForm()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Form;
