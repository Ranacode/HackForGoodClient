import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ActivityImage = ({ src }) => (
  <Col className="nopadding" xs={10} md={6} lg={6}>
    <div className="gallery">
      <div className="image__container">
        <Image width="951.5" height="530" src={src} responsive />
      </div>
    </div>
  </Col>
);

ActivityImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ActivityImage;
