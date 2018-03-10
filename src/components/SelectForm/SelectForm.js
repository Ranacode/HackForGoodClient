import React from 'react';
import { Grid, Row, Col, Image, Popover, OverlayTrigger } from 'react-bootstrap';
import Organization from '../../assets/images/selectForms/Organizacion.svg';
import Old from '../../assets/images/selectForms/Anciano.svg';
import Volunteer from '../../assets/images/selectForms/voluntario.svg';
import OrganizationCheck from '../../assets/images/selectForms/OrganizacionCheck.svg';
import VolunteerCheck from '../../assets/images/selectForms/VoluntarioCheck.svg';
import OldCheck from '../../assets/images/selectForms/AncianoCheck.svg';

import './SelectForm.css';

const SelectForm = (props) => {
  const popoverOld = (
    <Popover id="popover-trigger-focus" title="USUARIOS">
      <strong>Este es el formulario para los protagonistas de la plataforma</strong> Únete a
      nosotros
    </Popover>
  );

  const popoverOrganization = (
    <Popover id="popover-trigger-focus-organization" title="ASOCIACIONES">
      <strong>Si eres una asociación, este es tu formulario</strong> Únete a nosotros
    </Popover>
  );

  const popoverVolunteer = (
    <Popover id="popover-trigger-focus-volunteer" title="VOLUNTARIOS">
      <strong>
        Si tienes la actitud y energía necesarias para ser voluntario, este es tu formulario
      </strong>{' '}
      Únete a nosotros
    </Popover>
  );
  return (
    <Grid className="selectGrid">
      <Row>
        <Col md={4}>
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverOld}>
            <Image
              src={props.selectedForm === 'old_form' ? OldCheck : Old}
              name="old_form"
              onClick={props.handleClick}
            />
          </OverlayTrigger>
        </Col>
        <Col md={4}>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={popoverOrganization}
          >
            <Image
              src={props.selectedForm === 'organization_form' ? OrganizationCheck : Organization}
              name="organization_form"
              onClick={props.handleClick}
            />
          </OverlayTrigger>
        </Col>
        <Col md={4}>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={popoverVolunteer}
          >
            <Image
              src={props.selectedForm === 'volunteer_form' ? VolunteerCheck : Volunteer}
              name="volunteer_form"
              onClick={props.handleClick}
            />
          </OverlayTrigger>
        </Col>
      </Row>
    </Grid>
  );
};

export default SelectForm;
