import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Chicknoddle from '../../../images/soup/chicknoddle.jpg';
import Eggsoup from '../../../images/soup/egg.jpg';
import Hotsoup from '../../../images/soup/hotsoup.jpg';
import Housesoup from '../../../images/soup/housesoup.jpg';
import Seafoodhot from '../../../images/soup/seafoodhot.jpg';
import Seafoodnoddle from '../../../images/soup/seafoodnoddle.jpg';
import Vegesoup from '../../../images/soup/vegesoup.jpg';
import Wonton from '../../../images/soup/wonton.jpg';
import Wontonegg from '../../../images/soup/wontonegg.jpg';

export default class Soup extends Component {
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
                  <h1>Soup</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Wonton} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">1. Wonton Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Eggsoup} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">2. Egg Drop Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Wontonegg} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">3. Wonton Egg Drop Soup</li>
                        <li className="option-price-small">(S)$3.95</li>
                        <li className="option-price-large">$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chicknoddle} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">4. Chicken Noodle or Rice Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegesoup} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">5. Vegetable Soup</li>
                        <li className="option-price-small">(S)$2.95</li>
                        <li className="option-price-large">$4.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Hotsoup} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">6. Hot & Sour Soup</li>
                        <li className="option-price-small">(S)$3.95</li>
                        <li className="option-price-large">(L)$4.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Housesoup} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">7. House Special Soup (for 2)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$7.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Seafoodnoddle} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">7a. Seafood Noodle Soup (for 2))</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$9.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Seafoodhot} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">8. Seafood or Seafood Hot & Sour Soup (for 2)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$7.25</li>
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
