import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import BeanCurd from '../../../images/vege/bean.jpg';
import Beanbro from '../../../images/vege/beanbro.jpg';
import Delight from '../../../images/vege/delight.jpg';
import Garlic from '../../../images/vege/garlic.jpg';
import Orange from '../../../images/vege/orange.jpg';
import Saubro from '../../../images/vege/saubro.jpg';
import Saumix from '../../../images/vege/saumix.jpeg';
import Saupeas from '../../../images/vege/saupeas.jpg';

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
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                     <div className="option-left-side">
                        <img src={Saubro} />
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
                        <img src={Saupeas} />
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
                        <img src={Saumix} />
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
                        <img src={BeanCurd} />
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
                        <img src={Beanbro} />
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
                        <img src={Delight} />
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
                        <img src={Garlic} />
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
                        <img src={Orange} />
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
