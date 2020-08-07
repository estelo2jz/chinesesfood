import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beefrice from '../../../images/rice/beefrice.jpg';
import Chickenrice from '../../../images/rice/chickenrice.jpg';
import Crabrice from '../../../images/rice/crabrice.jpg';
import Eggrice from '../../../images/rice/eggrice.jpg';
import Houserice from '../../../images/rice/houserice.jpg';
import Jumborice from '../../../images/rice/jumborice.jpg';
import Lobsterrice from '../../../images/rice/lobsterrice.jpg';
import Mushrice from '../../../images/rice/mushrice.jpg';
import Shrimprice from '../../../images/rice/shrimprice.jpg';
import Vegerice from '../../../images/rice/vegerice.jpg';

export default class FriedRice extends Component {
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
                  <h1>Fried Rice</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Eggrice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">24.  Egg Fried Rice</li>
                        <li className="option-price-small">(S)$3.95</li>
                        <li className="option-price-large">(L)$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chickenrice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">25.  Pork or Chicken Fried Rice</li>
                        <li className="option-price-small">(S)$4.75</li>
                        <li className="option-price-large">(L)$7.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Shrimprice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">26.  Shrimp Fried Rice</li>
                        <li className="option-price-small">(S)$5.75</li>
                        <li className="option-price-large">(L)$8.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                      <img src={Beefrice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">27.  Beef Fried Rice</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$9.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegerice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">28.  Vegetable Fried Rice</li>
                        <li className="option-price-small">(S)$4.55</li>
                        <li className="option-price-large">$6.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Crabrice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">29.  Crab Meat Fried Rice</li>
                        <li className="option-price-small">(S)$4.75</li>
                        <li className="option-price-large">(L)$7.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Mushrice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">30.  Mushroom Fried Rice</li>
                        <li className="option-price-small">(S)$4.55</li>
                        <li className="option-price-large">(L)$6.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Lobsterrice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">31.  Lobster Fried Rice</li>
                        <li className="option-price-small">(S)$6.95</li>
                        <li className="option-price-large">(L)$9.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Houserice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">32.  House Special Fried Rice</li>
                        <li className="option-price-small">(S)$5.75</li>
                        <li className="option-price-large">$8.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumborice} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">33.  Hot & Spicy Jumbo Shrimp Fried Rice</li>
                        <li className="option-price-small">(S)$6.95</li>
                        <li className="option-price-large">(L)$9.95</li>

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
