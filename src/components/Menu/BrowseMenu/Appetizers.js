import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Boneless from '../../../images/appetizers/boneless.jpg';
import Chickenstick from '../../../images/appetizers/chickenstick.jpg';
import Crabmeatrangoon from '../../../images/appetizers/crabmeatrangoon.jpg';
import Friedplantain from '../../../images/appetizers/friedplantain.png';
import Friedshrimp from '../../../images/appetizers/friedshrimp.jpg';
import Friedsteam from '../../../images/appetizers/friedsteam.jpg';
import Friedwings from '../../../images/appetizers/friedwings.jpg';
import Fries from '../../../images/appetizers/fries.jpg';
import Jumboshrimp from '../../../images/appetizers/jumboshrimp.jpg';
import Onionrings from '../../../images/appetizers/onionrings.jpg';
import Roastporkegg from '../../../images/appetizers/roastporkegg.jpg';
import Shrimpegg from '../../../images/appetizers/shrimpegg.jpg';
import Vegerolls from '../../../images/appetizers/vegerolls.jpg';

export default class Appetizers extends Component {
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
                  <h1>Appetizers</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Roastporkegg} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">9.  Roast Pork Egg Roll (1)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$1.40</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Shrimpegg} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">10.  Shrimp Egg Roll (1)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$1.50</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegerolls} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">11.  Vegetable Spring Roll (2)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$2.50</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Crabmeatrangoon} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">12.  Crabmeat Rangoon (8)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$5.00</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Friedsteam} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">14.  Fried or Steamed Dumpling (6)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Fries} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">15.  French Fries</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">(L)$3.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Onionrings} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">16.  Onion Ring</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$3.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Friedwings} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">17.  Fried Chicken Wings (3)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$5.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chickenstick} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">18.  Chicken on Stick (4)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$4.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Friedshrimp} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">19.  Fried Shrimp (6)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$6.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Jumboshrimp} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">20.  Jumbo Shrimp on Stick (2)</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$7.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Boneless} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">21.  Boneless Spare Rib</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$10.55</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Friedplantain} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">22.  Fried Plantain</li>
                        <li className="option-price-small">-</li>
                        <li className="option-price-large">$3.75</li>

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
