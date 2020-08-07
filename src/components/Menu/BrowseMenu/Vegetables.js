import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class Vegetables extends Component {
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
                  <h1>Vegetables</h1>
                  <p>(w, White Rice) (3 Patties)</p>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>89.  Sauteed Broccoli</li>
                      <li>(S)$4.75</li>
                      <li>$8.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>90.  Sauteed Snow Peas</li>
                      <li>-</li>
                      <li>$8.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>91.  Sauteed Mixed Vegetables</li>
                      <li>-</li>
                      <li>$8.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>92.  Szechuan Bean Curd</li>
                      <li>-</li>
                      <li>$8.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>93.  Bean Curd with Broccoli</li>
                      <li>-</li>
                      <li>$8.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <li>94.  Buddha's Delight (Chinese Veg.)</li>
                      <li>-</li>
                      <li>$8.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>95.  Broccoli in Garlic Sauce</li>
                      <li>-</li>
                      <li>$8.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>96.  Crispy Orange Tofu</li>
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
