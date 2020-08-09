import React from 'react';
import { NavLink } from 'react-router-dom';

import Bonelesstwo from '../../images/appetizers/boneless.jpg';
import ChickenCurrytwo from '../../images/chicken/chickencurry.jpg';
import Beeflotwo from '../../images/lomein/beeflo.jpg';

function MenuHigh() {
  return (
    <div className="menu-high-container">
      <div className="menu-high-grid-container">
        <div>
          <h2>Menu Highlight</h2>
        </div>
        <div className="menu-high-item-container">
          <div className="menu-high-image">
            <img src={Bonelesstwo} />
          </div>
          <div className="menu-topic-container">
            <NavLink to="/appetizers">
              <h4>Appetizers</h4>
            </NavLink>
            <p>Shrimp Egg Roll</p>
            <p>Fried Dumpling </p>
            <p>Boneless Spare Rib</p>
          </div>
        </div>
        <div className="menu-high-item-container">
          <div className="menu-high-image">
            <img src={ChickenCurrytwo} />
          </div>
          <div className="menu-topic-container">
            <NavLink to="/chicken">
              <h4>Chicken</h4>
            </NavLink>
            <p>Chicken w. Broccoli</p>
            <p>Hunan Chicken</p>
            <p>Curry Chicken</p>
          </div>
        </div>
        <div className="menu-high-item-container">
          <div className="menu-high-image">
            <img src={Beeflotwo} />
          </div>
          <div className="menu-topic-container">
            <NavLink to="/lomien">
              <h4>Lo Mien</h4>
            </NavLink>
            <p>Shrimp Lo Mein</p>
            <p>Beef Lo Mein</p>
            <p>Chicken Lo Mein</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuHigh
