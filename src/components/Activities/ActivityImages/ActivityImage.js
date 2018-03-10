import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import ActivityModal from './ActivityModal';

class ActivityImage extends Component {
  state = {
    lgShow: false,
    activityData: this.props.data,
  };
  render() {
    const data = this.state.activityData;
    const lgClose = () => this.setState({ lgShow: false });
    return (
      <Col className="nopadding" xs={10} md={6} lg={6}>
        <div className="gallery">
          <div className="image__container">
            <Image
              onClick={() => this.setState({ lgShow: true })}
              width="951.5"
              height="530"
              src={data.image}
              responsive
            />
          </div>
        </div>
        <ActivityModal data={this.state.activityData} show={this.state.lgShow} onHide={lgClose} />
      </Col>
    );
  }
}

export default ActivityImage;
