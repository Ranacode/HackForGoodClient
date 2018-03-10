import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  Button,
} from 'react-bootstrap';

class LoginForm extends Component {
  state = {
    data: {
      password: '',
      phone: '',
      email: '',
    },
    loading: false,
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  validateGeneralData = () => null;

  render() {
    const { phone, password, email } = this.state;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={8} xsOffset={2} sm={8} smOffset={2} md={8} mdOffset={2} lg={4} lgOffset={4}>
            <form className="loginForm__container" action="/user/login" method="POST">
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fas fa-phone fa-2x" />
                  </InputGroup.Addon>
                  <FormControl
                    required
                    type="tel"
                    value={phone}
                    name="phone"
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="far fa-envelope fa-2x" />
                  </InputGroup.Addon>
                  <FormControl
                    type="email"
                    required
                    value={email}
                    name="email"
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Contraseña</ControlLabel>
                <FormControl
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <Button type="submit">Entrar en BICUO</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginForm;
