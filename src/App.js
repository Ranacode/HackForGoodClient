import React, { Component } from 'react';
import CustomNavbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <p> CONTENT </p>
        <Footer />
      </div>
    );
  }
}

export default App;
