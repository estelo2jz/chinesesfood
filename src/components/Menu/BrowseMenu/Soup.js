import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class Soup extends Component {
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
                  <h1>Soup</h1>
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
                        <li className="option-name">1. Wonton Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">2. Egg Drop Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">3. Wonton Egg Drop Soup</li>
                        <li className="option-price-small">(S)$3.95</li>
                        <li className="option-price-large">$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">4. Chicken Noodle or Rice Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">5. Vegetable Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">6. Hot & Sour Soup</li>
                        <li className="option-price-small">(S)$3.95</li>
                        <li className="option-price-large">(L)$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">7. House Special Soup (for 2)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$7.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">7a. Seafood Noodle Soup (for 2))</li>
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
                        <li className="option-name">8. Seafood or Seafood Hot & Sour Soup (for 2)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$7.25</li>
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
