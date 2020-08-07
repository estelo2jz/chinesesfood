import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beefmai from '../../../images/mai/beefmai.jpg';
import Chickenmai from '../../../images/mai/chickenmai.jpg';
import Housemai from '../../../images/mai/housemai.jpg';
import Shrimpmai from '../../../images/mai/shrimpmai.jpg';
import Singmai from '../../../images/mai/singmai.jpg';
import Vegemai from '../../../images/mai/vegemai.jpg';

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
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegemai} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">40.  Vegetable Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chickenmai} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">41.  Chicken or Roast Pork Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$8.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Shrimpmai} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">42.  Shrimp Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefmai} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">42a.  Beef Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$10.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Housemai} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">43.  House Special Mai Fun</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Singmai} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">44.  Singapore Mei Fun</li>
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
