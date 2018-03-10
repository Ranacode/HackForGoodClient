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
        <SimpleMap
          center={{ lat: props.data.localization.latitude, lng: props.data.localization.longitude }}
          zoom={16}
          title={props.data.title}
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Panel>
        <Panel.Footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'middle',
          }}
        >
          <p>
            <strong>Fecha fijada para la actividad:</strong>
          </p>
          <p>
            <em>{props.data.deadline} </em>
            ~ <em>{props.data.time}</em>
          </p>
          <Button
            style={{
 fontFamily: 'MyriadPro', fontSize: 24, width: '50%', margin: '0 auto',
}}
            bsSize="primary"
          >
            Apuntarme a esta actividad
          </Button>
        </Panel.Footer>
      </Panel>
      <Button bsSize="primary" onClick={props.onHide}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ActivityModal;
