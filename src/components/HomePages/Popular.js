import React from 'react';
import { NavLink } from 'react-router-dom';

import Beefbrotwo from '../../images/lunch/beefbro.jpg';
import Chickenricetwo from '../../images/rice/chickenrice.jpg';
import Chickensourtwo from '../../images/sweet/chicken.jpg';

function Popular() {
  return (
    <div className="menu-high-container">
      <div className="menu-high-grid-container">
        <div>
          <h2>Popular Choices</h2>
        </div>
        <div className="menu-high-item-container">
          <div className="menu-high-image">
            <img src={Beefbrotwo} />
          </div>
          <div className="menu-topic-container">
            <NavLink to="/lunchspecial">
              <h4>Lunch Special</h4>
            </NavLink>
            <p>Chop Suey</p>
            <p>Beef Broccoli</p>
            <p>Chicken with Cashew Nuts</p>
          </div>
        </div>
        <div className="menu-high-item-container">
          <div className="menu-high-image">
            <img src={Chickenricetwo} />
          </div>
          <div className="menu-topic-container">
            <NavLink to="/friedrice">
              <h4>Fried Rice</h4>
            </NavLink>
            <p>Shrimp Fried Rice</p>
            <p>Lobster Fried Rice</p>
            <p>Egg Fried Rice</p>
          </div>
        </div>
        <div className="menu-high-item-container">
          <div className="menu-high-image">
            <img src={Chickensourtwo} />
          </div>
          <div className="menu-topic-container">
            <NavLink to="/sweetsour">
              <h4>Sweet & Sour</h4>
            </NavLink>
            <p>Sweet and Sour Pork</p>
            <p>Sweet and Sour Chicken</p>
            <p>Sweet and Sour Shrimp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular;