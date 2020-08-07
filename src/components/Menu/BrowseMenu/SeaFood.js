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
                      <img src='http://via.placeholder.com/130x130' />
                      <li>74.  Jumbo Shrimp with Broccoli</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>75.  Jumbo Shrimp with Lobster Sauce</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>76.  Jumbo Shrimp with Chinese Veg.</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>78.  Jumbo Shrimp with Snow Peas)</li>
                      <li>(S)$6.95</li>
                      <li>(L)$10.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>79.  Jumbo Shrimp with Mushrooms</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>80.  Jumbo Shrimp with Mixed Veg.</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>81.  Jumbo Shrimp with Curry Sauce</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>82.  Salt & Pepper Shrimp</li>
                      <li>(S)$7.95</li>
                      <li>(L)$14.95</li>
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
