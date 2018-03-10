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
    activities: [
      {
        id: '28392832',
        title: 'Titulo de la actividad',
        image: Activity1,
        localization: {
          city: 'Las Palmas de G.C',
          latitude: 28.133094,
          longitude: -15.440125,
        },
        information:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus error laudantium repellat, dolor mollitia eum laborum odio ipsa tempore vitae commodi temporibus et at consequatur delectus eaque possimus nihil reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus error laudantium repellat, dolor mollitia eum laborum odio ipsa tempore vitae commodi temporibus et at consequatur delectus eaque possimus nihil reiciendis.',
        deadline: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
      {
        id: '28312832',
        title: 'Titulo de la actividad',
        image: Activity2,
        localization: {
          city: 'Las Palmas de G.C',
          latitude: 28.125865,
          longitude: -15.43747,
        },
        information:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus error laudantium repellat, dolor mollitia eum laborum odio ipsa tempore vitae commodi temporibus et at consequatur delectus eaque possimus nihil reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus error laudantium repellat, dolor mollitia eum laborum odio ipsa tempore vitae commodi temporibus et at consequatur delectus eaque possimus nihil reiciendis.',
        deadline: new Date().toLocaleDateString(),
      },
      {
        id: '28392822',
        title: 'Titulo de la actividad',
        image: Activity3,
        localization: {
          city: 'Las Palmas de G.C',
          latitude: 28.120471,
          longitude: -15.428245,
        },
        information:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus error laudantium repellat, dolor mollitia eum laborum odio ipsa tempore vitae commodi temporibus et at consequatur delectus eaque possimus nihil reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus error laudantium repellat, dolor mollitia eum laborum odio ipsa tempore vitae commodi temporibus et at consequatur delectus eaque possimus nihil reiciendis.',
        deadline: new Date().toLocaleDateString(),
      },
    ],
  };

  componentDidMount() {}

  render() {
    return (
      <div className="main__container">
        <ActivityTitle title="Últimas publicaciones de actividades" />
        <Grid>
          <Row>
            {this.state.activities.map(activity => (
              <ActivityImage key={activity.id} data={activity} />
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Activities;
