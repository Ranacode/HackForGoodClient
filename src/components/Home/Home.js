import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import CustomCarousel from '../Carousel/Carousel';
import PhoneSVG from '../../assets/images/auricular-phone-symbol-in-a-circle.svg';
import './home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: '5%', textAlign: 'center' }}>
        <Grid>
          <Row>
            <CustomCarousel />
          </Row>
        </Grid>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6} lg={6} className="landing">
              <h2 className="homeTitles"> Nuestro objetivo </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.{' '}
              </p>
            </Col>
            <Col xs={12} md={6} lg={6} className="landing">
              <h2 className="homeTitles">Nuestros valores</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.{' '}
              </p>
            </Col>
            <Col xs={12} md={6} lg={6} style={{ padding: '30px' }}>
              <h2 className="homeTitles">Asociaciones que colaboran</h2>
              <h3 className="homeSubtitles">Aportaciones</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </p>
              <h3 className="homeSubtitles">Sitio Verificado</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor.
              </p>
              <Button>Colabora con nosotros</Button>
            </Col>
            <Col xs={12} md={6} lg={6} style={{ padding: '30px' }}>
              <Image
                src="http://universocial.ulpgc.es/wordpress/wp-content/uploads/2014/01/Universocial-Canarias.png"
                responsive
              />
            </Col>
            <Col xs={12} md={12} lg={12} className="landing">
              <h1 className="homeTitles">¿Necesitas ayuda?</h1>
              <h4 className="homeSubtitles">Contacta con nosotros</h4>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ marginRight: 10 }}
                  width="45"
                  height="45"
                  src={PhoneSVG}
                  responsive
                />
                <h1>928235478</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
