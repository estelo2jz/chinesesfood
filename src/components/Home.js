import React, { Component } from 'react';

import About from './HomePages/About';
import Address from './HomePages/Address';
import Delevery from './HomePages/Delevery';
import MenuHigh from './HomePages/MenuHigh';
import MenuPic from './HomePages/MenuPic';
import Popular from './HomePages/Popular';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-top-container">
          <div className="home-top-left-container">
            <div>
              <Delevery />
            </div>
            <div>
              <Address />
            </div>
          </div>
          <div className="home-top-right-container">
            <MenuPic />
          </div>
        </div>

        <div className="home-bottom-container">
          <div>
            <About />
          </div>
          <div>
          <div className="home-bottom-images-container">
            <div>
              <MenuHigh />  
            </div>
            <div>
              <Popular />
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
