import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ReactSVG from 'react-svg';
import ulpgcLogo from '../assets/images/logos/ulpgc.png';
import ccLogo from '../assets/images/logos/cc.svg';
import socialMediaLogos from '../assets/images/social/redesSociales.png';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="socialLogos">
          <Image width="250" height="75" src={socialMediaLogos} />
        </div>
        <div className="footerContainer">
          <div className="footerListContainer">
            <ul className="list-unstyled">
              <li> Link </li>
              <li> Link </li>
              <li> Link </li>
            </ul>
            <ul className="list-unstyled">
              <li> Link </li>
              <li> Link </li>
              <li> Link </li>
            </ul>
          </div>
          <div className="logosContainer">
            <Image width="100" height="100" src={ulpgcLogo} alt="" responsive />
            <div className="ccSvg">
              <ReactSVG path={ccLogo} responsive />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
