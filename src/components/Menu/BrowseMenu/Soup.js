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
                  <h1>Soup (Sopas)</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>1.  Wonton Soup</li>
                      <li>(S)$2.95</li>
                      <li>$4.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>2.  Egg Drop Soup</li>
                      <li>(S)$2.95</li>
                      <li>$4.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>3.  Wonton Egg Drop Soup</li>
                      <li>(S)$3.95</li>
                      <li>$4.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>4.  Chicken Noodle or Rice Soup</li>
                      <li>(S)$2.95</li>
                      <li>$4.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>5.  Vegetable Soup</li>
                      <li>(S)$2.95</li>
                      <li>$4.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>6.  Hot & Sour Soup</li>
                      <li>(S)$3.95</li>
                      <li>(L)$4.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>7.  House Special Soup (for 2)</li>
                      <li>-</li>
                      <li>$7.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>7a.  Seafood Noodle Soup (for 2))</li>
                      <li>-</li>
                      <li>$9.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>8.  Seafood or Seafood Hot & Sour Soup (for 2)</li>
                      <li>-</li>
                      <li>$7.25</li>
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
