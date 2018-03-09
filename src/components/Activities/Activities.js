import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ActivityTitle from './ActivityTitle';
import ActivityImage from './ActivityImages/ActivityImage';
import Activity1 from '../../assets/images/activity1.jpg';
import Activity2 from '../../assets/images/activity2.jpg';
import Activity3 from '../../assets/images/activity3.jpg';

import './activities.css';

class Activities extends Component {
  state = {
    activities: [],
  };

  componentDidMount() {}

  render() {
    return (
      <div className="main__container">
        <ActivityTitle title="Últimas publicaciones de actividades" />
        <Grid>
          <Row>
            <ActivityImage src={Activity1} />
            <ActivityImage src={Activity2} />
            <ActivityImage src={Activity3} />
            <ActivityImage src={Activity1} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Activities;
