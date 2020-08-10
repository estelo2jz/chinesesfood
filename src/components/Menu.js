import React, { Component } from 'react';

import BrowseMenu from './Menu/BrowseMenu/BrowseMenu';

// Menu Options
import LunchSpecial from '../components/Menu/BrowseMenu/LunchSpecial';
import Soup from '../components/Menu/BrowseMenu/Soup';
import Appetizers from '../components/Menu/BrowseMenu/Appetizers';
import FriedRice from '../components/Menu/BrowseMenu/FriedRice';
import LoMien from '../components/Menu/BrowseMenu/LoMien';
import MaiFun from '../components/Menu/BrowseMenu/MaiFun';
import ChopSuey from '../components/Menu/BrowseMenu/ChopSuey';
import Chicken from '../components/Menu/BrowseMenu/Chicken';
import Pork from '../components/Menu/BrowseMenu/Pork';
import Beef from '../components/Menu/BrowseMenu/Beef';
import SeaFood from '../components/Menu/BrowseMenu/SeaFood';
import EggFooYoung from '../components/Menu/BrowseMenu/EggFooYoung';
import Vegetables from '../components/Menu/BrowseMenu/Vegetables';
import SweetSour from '../components/Menu/BrowseMenu/SweetSour';

export default class Menu extends Component {
  render() {
    return (
      <div className="option-outside-container">
        <div className="option-container">
          <div className="option-menu-container">
            <div>
              <BrowseMenu />
            </div>
          </div>
          <div className="option-image-container">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
