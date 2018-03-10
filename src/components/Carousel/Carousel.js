import React from 'react';
import { Image } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Activity1 from '../../assets/images/activity1.jpg';
import Activity2 from '../../assets/images/activity2.jpg';
import Activity3 from '../../assets/images/activity3.jpg';

const CustomCarousel = () => (
  <Carousel dynamicHeight width="1000">
    <div>
      <Image src={Activity1} alt="" responsive />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <Image src={Activity2} alt="" responsive />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <Image src={Activity3} alt="" responsive />
      <p className="legend">Legend3</p>
    </div>
  </Carousel>
);

export default CustomCarousel;
