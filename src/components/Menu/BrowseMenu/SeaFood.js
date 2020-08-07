import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class SeaFood extends Component {
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
                  <h1>Sea Food (Camarones)</h1>
                  <p>with White Rice</p>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">74.  Jumbo Shrimp with Broccoli</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">75.  Jumbo Shrimp with Lobster Sauce</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">76.  Jumbo Shrimp with Chinese Veg.</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">78.  Jumbo Shrimp with Snow Peas)</li>
                        <li className="option-price-small">(S)$6.95</li>
                        <li className="option-price-large">(L)$10.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">79.  Jumbo Shrimp with Mushrooms</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.75</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">80.  Jumbo Shrimp with Mixed Veg.</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">81.  Jumbo Shrimp with Curry Sauce</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div>
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div>
                        <li className="option-name">82.  Salt & Pepper Shrimp</li>
                        <li className="option-price-small">(S)$7.95</li>
                        <li className="option-price-large">(L)$14.95</li>
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
