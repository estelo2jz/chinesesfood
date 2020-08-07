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
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">Chicken with Broccoli</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">57.  Moo Goo Gai Pan</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">59.  Chicken with Snow Peas</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$9.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">60.  Chicken with Mixed Vegetable</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">61.  Chicken with Curry Sauce</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

                      </div>
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
