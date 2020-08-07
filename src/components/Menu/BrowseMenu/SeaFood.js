import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Jumbolobs from '../../../images/shrimp/jumbosauce.jpg';
import Jumbocurry from '../../../images/shrimp/jumbocurry.jpg';
import Jumbomix from '../../../images/shrimp/jumbomix.jpg';
import Jumbomush from '../../../images/shrimp/jumbomush.jpg';
import Jumbopeas from '../../../images/shrimp/jumbopeas.jpg';
import Jumbopepper from '../../../images/shrimp/jumbopepper.jpg';
import Jumbobro from '../../../images/shrimp/jumboshr.jpg';
import Jumbovege from '../../../images/shrimp/jumbovege.jpg';


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
                  <h1>Sea Food</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbobro} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">74.  Jumbo Shrimp with Broccoli</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbolobs} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">75.  Jumbo Shrimp with Lobster Sauce</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbovege} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">76.  Jumbo Shrimp with Chinese Veg.</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbopeas} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">78.  Jumbo Shrimp with Snow Peas)</li>
                        <li className="option-price-small">(S)$6.95</li>
                        <li className="option-price-large">(L)$10.95</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbomush} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">79.  Jumbo Shrimp with Mushrooms</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.75</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbomix} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">80.  Jumbo Shrimp with Mixed Veg.</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbocurry} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">81.  Jumbo Shrimp with Curry Sauce</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.25</li>
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbopepper} />
                      </div>
                      <div className="option-right-side">
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
