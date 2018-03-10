import React from 'react';
import { Modal, Button, Panel } from 'react-bootstrap';
import SimpleMap from '../../GoogleMap/SimpleMap';

const ActivityModal = props => (
  <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
    <Modal.Header closeButton>
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{props.data.title}</Panel.Title>
        </Panel.Heading>
      </Panel>
    </Modal.Header>
    <Modal.Body>
      <Panel.Body>{props.data.information}</Panel.Body>
      <div style={{ width: '100%', height: '400px' }}>
        <SimpleMap />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Panel>
        <Panel.Footer>
          <p>Fecha fijada para la actividad: </p>
          {props.data.deadline}
        </Panel.Footer>
      </Panel>
      <Button onClick={props.onHide}>Cerrar</Button>
    </Modal.Footer>
  </Modal>
);

export default ActivityModal;
