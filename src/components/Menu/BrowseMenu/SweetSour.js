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
                      <img src='http://via.placeholder.com/130x130' />
                      <li>101.  Sweet and Sour Pork</li>
                      <li>(S)$5.95</li>
                      <li>(L)$8.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>102.  Sweet and Sour Chicken</li>
                      <li>(S)$5.95</li>
                      <li>(L)$8.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>103.  Sweet and Sour Shrimp</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.25</li>
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
