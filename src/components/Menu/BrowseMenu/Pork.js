import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Roastpork from '../../../images/pork/roastpork.jpg';
import Porkpeas from '../../../images/pork/porkpeas.jpg';
import Porkvege from '../../../images/pork/porkvege.jpg';
import Porkmush from '../../../images/pork/porkmush.jpg';
import { Route } from 'react-router-dom';

export default class Pork extends Component {
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
                  <h1>Pork</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Roastpork} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">62.  Roast Pork with Broccoli</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Porkvege} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">63.  Roast Pork with Chinese Veg.</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Porkpeas} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">64.  Roast Pork with Snow Peas</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$9.95</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Porkmush} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">65.  Roast Pork with Mushrooms</li>
                        <li className="option-price-small">(S)$5.95</li>
                        <li className="option-price-large">(L)$9.25</li>

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
