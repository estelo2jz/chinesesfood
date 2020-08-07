import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/main.scss';
import AllDishes from './AllDishes';

export default class BrowseMenu extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-flex-container">
          <div className="menu-header">
            <h1>Browse Our Menu</h1>
          </div>
          <div className="menu-list-container">
            <NavLink to="/lunchspecial">
              <h1>Lunch Special</h1>
            </NavLink>
            <NavLink to="/soup">
              <h1>Soup</h1>
            </NavLink>
            <NavLink to="/appetizers">
              <h1>Appetizers</h1>
            </NavLink>
            <NavLink to="/friedrice">
              <h1>Fried Rice</h1>
            </NavLink>
            <NavLink to="/lomien">
              <h1>Lo Mien</h1>
            </NavLink>
            <NavLink to="/maifun">
              <h1>Mai Fun</h1>
            </NavLink>
            <NavLink to="/chopsuey">
              <h1>Chop Suey</h1>
            </NavLink>
            <NavLink to="/chicken">
              <h1>Chicken</h1>
            </NavLink>
            <NavLink to="/pork">
              <h1>Pork</h1>
            </NavLink>
            <NavLink to="/beef">
              <h1>Beef</h1>
            </NavLink>
            <NavLink to="/seafood">
              <h1>Sea Food</h1>
            </NavLink>
            <NavLink to="/eggfooyoung">
              <h1>Egg Foo Young</h1>
            </NavLink>
            <NavLink to="/vegetables">
              <h1>Vegetables</h1>
            </NavLink>
            <NavLink to="/sweetsour">
              <h1>Sweet and Sour</h1>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}
