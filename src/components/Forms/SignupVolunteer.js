import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  Radio,
  Button,
  Image,
} from 'react-bootstrap';
import RegisterButton from '../../assets/images/buttons/Cerrar.svg';

class SignupForm extends Component {
  state = {
    data: {
      name: '',
      lastname: '',
      password: '',
      confirmPassword: '',
      gender: '',
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
    const {
      name, lastname, gender, password, confirmPassword, phone, email,
    } = this.state.data;
    return (
      <form className="form__container" action="/user/login" method="POST">
        <FormGroup controlId="formInlineLaneGeneral" validationState={this.validateGeneralData()}>
          <ControlLabel>Nombre</ControlLabel>
          <FormControl required type="text" value={name} name="name" onChange={this.handleChange} />
          <FormControl.Feedback />
          <ControlLabel>Apellidos</ControlLabel>
          <FormControl
            required
            type="text"
            value={lastname}
            name="lastname"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Radio value={gender} checked name="gender" onChange={this.handleChange} inline>
            Hombre
          </Radio>
          <Radio value={gender} name="gender" onChange={this.handleChange} inline>
            Mujer
          </Radio>
        </FormGroup>
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
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass="select">
            <option value="select">Ciudad </option>
            <option value="laspalmas">Las Palmas de G.C</option>
            <option value="telde">Telde</option>
            <option value="agaete">Agaete</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <i className="far fa-image fa-2x  " />
            </InputGroup.Addon>
            <ControlLabel>Tu imagen de perfil</ControlLabel>
            <FormControl type="file" encType="multipart/form-data" name="image" accept="image/*" />
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
          <FormControl.Feedback />
          <ControlLabel>Confirma tu contraseña</ControlLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button block className="removeButtonStyles" type="submit">
          <Image src={RegisterButton} style={{ width: 200, height: 'auto' }} />
        </Button>
      </form>
    );
  }
}

export default SignupForm;
