import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class SweetSour extends Component {
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
                  <h1>Sweet and Sour</h1>
                  <p>with White Rice, Sauce on the Side</p>
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
                        <li className="option-name">101.  Sweet and Sour Pork</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$8.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">102.  Sweet and Sour Chicken</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$8.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">103.  Sweet and Sour Shrimp</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
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
