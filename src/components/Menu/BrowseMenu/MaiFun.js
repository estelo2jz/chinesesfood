import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class MaiFun extends Component {
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
                  <h1>Mai Fun</h1>
                  <p>Thin Rice Noodle</p>
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
                        <li className="option-name">40.  Vegetable Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">41.  Chicken or Roast Pork Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">42.  Shrimp Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">42a.  Beef Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$10.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">43.  House Special Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">44.  Singapore Mei Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$9.25</li>

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
