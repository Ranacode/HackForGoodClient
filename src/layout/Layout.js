import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>da</p>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
