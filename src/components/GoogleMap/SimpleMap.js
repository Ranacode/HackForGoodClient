import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <i className="fas fa-map-marker-alt fa-3x" />;

class SimpleMap extends Component {
  state = {};

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBRoJPqqOu3mEsu1XlL_tPhT0jXLmmmlos' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          text={this.props.title}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
