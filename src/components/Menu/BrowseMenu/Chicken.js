import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class Chicken extends Component {
  render() {
    return (
      <div className="option-outside-container">
        <div className="option-container">
          <div className="option-menu-container">
            <div>
              <BrowseMenu />
            </div>
          </div>
          <div className="option-helper-container">
            <div className="option-summary-container">
              <div className="option-menu-header">
                <div>
                  <h1>Chicken (Pollo)</h1>
                  <p>with White Rice</p>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>Chicken with Broccoli</li>
                      <li>(S)$5.95</li>
                      <li>(L)$9.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <li>57.  Moo Goo Gai Pan</li>
                      <li>(S)$5.95</li>
                      <li>(L)$9.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>59.  Chicken with Snow Peas</li>
                      <li>(S)$6.25</li>
                      <li>(L)$9.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>60.  Chicken with Mixed Vegetable</li>
                      <li>(S)$5.95</li>
                      <li>(L)$9.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>61.  Chicken with Curry Sauce</li>
                      <li>(S)$5.95</li>
                      <li>(L)$9.25</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
