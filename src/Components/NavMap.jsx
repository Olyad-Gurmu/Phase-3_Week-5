import React, { Component } from 'react';
import NavData from "./NavData.jsx";
import NavLinks from './NavLinks.jsx'

class NavMap extends Component {
  render() {
    return NavData.map((values, index) => {
      return <NavLinks kry={index} arrayData={values} />;
    });
  }
}

export default NavMap;
