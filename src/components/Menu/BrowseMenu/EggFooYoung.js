import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beeffoo from '../../../images/foo/beeffoo.jpg';
import Housefoo from '../../../images/foo/housefoo.jpg';
import Mushfoo from '../../../images/foo/mushfoo.jpeg';
import Roastfoo from '../../../images/foo/roastfoo.jpg';
import Shrimpfoo from '../../../images/foo/shrimpfoo.jpg';
import Vegefoo from '../../../images/foo/vegefoo.jpg';

export default class EggFooYoung extends Component {
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
                  <h1>Egg Foo Young</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Vegefoo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">83.  Vegetable Egg Foo Young</li>
                        <li className="option-price-large">$7.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Mushfoo} />
                      </div>
                      <div className="option-right-side">
                          <li className="option-name">84.  Mushroom Egg Foo Young</li>
                          <li className="option-price-large">$7.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Roastfoo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">85.  Roast Pork or Chicken Egg Foo Young</li>
                        <li className="option-price-large">$7.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Shrimpfoo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">86.  Shrimp Egg Foo Young</li>
                        <li className="option-price-large">$8.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beeffoo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">87.  Beef Egg Foo Young</li>
                        <li className="option-price-large">$8.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Housefoo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">88.  House Special Egg Foo Young</li>
                        <li className="option-price-large">$8.25</li>

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
