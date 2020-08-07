import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beefchop from '../../../images/chop/beefchop.jpg';
import Chickenchop from '../../../images/chop/chickenchop.jpg';
import Housechop from '../../../images/chop/housechop.jpg';
import Shrimpchop from '../../../images/chop/shrimpchop.jpg';
import Vegechop from '../../../images/chop/vegechop.jpg';

export default class ChopSuey extends Component {
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
                  <h1>Chop Suey</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegechop} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">50. Vegetable Chop Suey</li>
                        <li className="option-price-small">(S)$4.75</li>
                        <li className="option-price-large">(L)$7.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chickenchop} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">51.  Chicken or Roast Pork Chop Suey</li>
                        <li className="option-price-small">(S)$5.75</li>
                        <li className="option-price-large">(L)$8.25</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Shrimpchop} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">52.  Shrimp Chop Suey</li>
                        <li className="option-price-small">(S)$2.65</li>
                        <li className="option-price-large">(L)$8.95</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefchop} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">53.  Beef Chop Suey</li>
                        <li className="option-price-small">(S)$6.75</li>
                        <li className="option-price-large">(L)$10.45</li>
                        
                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Housechop} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">54.  House Special Chop Suey</li>
                        <li className="option-price-small">(S)$6.25</li>
                        <li className="option-price-large">(L)$8.95</li>
                        
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
