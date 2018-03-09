import React from 'react';
import PropTypes from 'prop-types';

const ActivityTitle = ({ title }) => (
  <div className="title__container">
    <h1>{title}</h1>
  </div>
);

ActivityTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ActivityTitle;
