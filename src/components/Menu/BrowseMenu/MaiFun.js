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
                      <img src='http://via.placeholder.com/130x130' />
                      <li>40.  Vegetable Mai Fun</li>
                      <li>-</li>
                      <li>$8.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>41.  Chicken or Roast Pork Mai Fun</li>
                      <li>-</li>
                      <li>$8.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>42.  Shrimp Mai Fun</li>
                      <li>-</li>
                      <li>$9.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>42a.  Beef Mai Fun</li>
                      <li>-</li>
                      <li>$10.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>43.  House Special Mai Fun</li>
                      <li>-</li>
                      <li>$9.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>44.  Singapore Mei Fun</li>
                      <li>-</li>
                      <li>$9.25</li>
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
