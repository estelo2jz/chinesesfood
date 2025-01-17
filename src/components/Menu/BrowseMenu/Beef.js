import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beefbro from '../../../images/beef/beefbro.jpg';
import Beefcurry from '../../../images/beef/beefcurry.jpg';
import Beefmix from '../../../images/beef/beefmix.jpg';
import Beefmush from '../../../images/beef/beefmush.jpg';
import Beefpeas from '../../../images/beef/beefpeas.jpg';
import Beefvege from '../../../images/beef/beefvege.jpg';
import Peppersteak from '../../../images/beef/peppersteak.jpg';
import Peppertom from '../../../images/beef/peppertom.jpg';

export default class Beef extends Component {
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
                  <h1>Beef</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefbro} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">66.  Beef with Broccoli</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Peppersteak} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">67.  Pepper Steak with Onion</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Peppertom} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">Pepper Steak with Tomato</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefvege} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">69.  Beef with Chinese Vegetable</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefmush} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">70.  Beef with Mushrooms</li>
                        <li className="option-price-small">(S)$7.45</li>
                        <li className="option-price-large">(L)$11.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefpeas} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">71.  Beef with Snow Peas</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefcurry} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">72.  Beef with Curry Sauce</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.45</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefmix} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">73.  Beef with Mixed Veg.</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$11.45</li>

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
