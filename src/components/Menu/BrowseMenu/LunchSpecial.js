import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

import Beefbro from '../../../images/lunch/beefbro.jpg';
import Beefcurry from '../../../images/lunch/beefcurry.jpg';
import Cashew from '../../../images/lunch/cashew.jpg';
import Chickvege from '../../../images/lunch/chickvege.jpg';
import Chopsuey from '../../../images/lunch/chopsuey.jpg';
import Eggfooyoung from '../../../images/lunch/eggfooyoung.jpeg';
import Lomein from '../../../images/lunch/lomein.jpg';
import Mixvege from '../../../images/lunch/mixvege.jpeg';
import Moogoo from '../../../images/lunch/moogoo.jpg';
import Peppersteak from '../../../images/lunch/peppersteak.jpg';
import Sweet from '../../../images/lunch/sweet.jpg';



export default class LunchSpecial extends Component {
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
                  <h1>Lunch Special</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Mixvege} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L1.  Mixed Vegetables (No Meat) (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chopsuey} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L2.  Chop Suey (Pork, Chicken or Beef) (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Lomein} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L3.  Lo Mein (Pork, Chicken or Beef) (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Eggfooyoung} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L4.  Egg Foo Young (Pork, Chicken or Beef) (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Peppersteak} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L5.  Pepper Steak with Onions (Lunch)</li>
                        <li className="option-price-large">$6.75</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefbro} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L6.  Broccoli (Pork, Chicken or Beef) (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Moogoo} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L7.  Moo Goo Gai Pan (Chicken) (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Sweet} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L8.  Sweet and Sour Chicken or Pork (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Cashew} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L9.  Chicken with Cashew Nuts (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Chickvege} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L10.  Chicken with Mixed Vegetables (Lunch)</li>
                        <li className="option-price-large">$6.25</li>

                      </div>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <div className="option-left-side">
                        <img src={Beefcurry} />
                      </div>
                      <div className="option-right-side">
                        <li className="option-name">L11.  Curry Chicken or Beef (Lunch)Spicy</li>
                        <li className="option-price-large">$6.25</li>

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
