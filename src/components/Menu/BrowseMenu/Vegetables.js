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
                     <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">89.  Sauteed Broccoli</li>
                        <li className="option-price-small">(S)$4.75</li>
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
                        <li className="option-name">90.  Sauteed Snow Peas</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">91.  Sauteed Mixed Vegetables</li>
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
                        <li className="option-name">92.  Szechuan Bean Curd</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">93.  Bean Curd with Broccoli</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">94.  Buddha's Delight (Chinese Veg.)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src='http://via.placeholder.com/130x130' />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">95.  Broccoli in Garlic Sauce</li>
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
                        <li className="option-name">96.  Crispy Orange Tofu</li>
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
