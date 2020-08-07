import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beeflo from '../../../images/lomein/beeflo.jpg';
import Houselo from '../../../images/lomein/houselo.jpg';
import Jumbolo from '../../../images/lomein/jumbolo.jpg';
import Lobsterlo from '../../../images/lomein/lobsterlo.jpg';
import Roastporklo from '../../../images/lomein/roastporklo.jpg';
import Shrimplo from '../../../images/lomein/shrimplo.jpg';
import Vegelo from '../../../images/lomein/vegelo.jpg';

export default class LoMien extends Component {
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
                  <h1>Lo Mien</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Roastporklo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">34.  Chicken or Roast Pork Lo Mein</li>
                        <li className="option-price-small">(S)$5.5</li>
                        <li className="option-price-large">(L)$7.55</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Shrimplo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">35.  Shrimp Lo Mein</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$8.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beeflo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">35a.  Beef Lo Mein</li>
                        <li className="option-price-small">(S)$6.95</li>
                        <li className="option-price-large">(L)$9.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegelo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">36.  Vegetable Lo Mein</li>
                        <li className="option-price-small">(S)$4.75</li>
                        <li className="option-price-large">(L)$7.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Lobsterlo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">37.  Lobster Lo Mein</li>
                        <li className="option-price-small">(S)$6.95</li>
                        <li className="option-price-large">(L)$9.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Houselo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">38.  House Special Lo Mein</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$8.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumbolo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">39.  Hot Spicy Jumbo Shrimp Lo Mein</li>
                        <li className="option-price-small">(S)$6.95</li>
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
