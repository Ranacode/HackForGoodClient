import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import CustomCarousel from '../Carousel/Carousel';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> HOME</h1>
        <Grid>
          <Row>
            <CustomCarousel />
          </Row>
          <Row>
            INFORMATION
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
