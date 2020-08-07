import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class SideOrders extends Component {
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
                  <h1>Side Orders</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L1.  Mixed Vegetables (No Meat) (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L2.  Chop Suey (Pork, Chicken or Beef) (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L3.  Lo Mein (Pork, Chicken or Beef) (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L4.  Egg Foo Young (Pork, Chicken or Beef) (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L5.  Pepper Steak with Onions (Lunch)</li>
                      <li>$6.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L6.  Broccoli (Pork, Chicken or Beef) (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L7.  Moo Goo Gai Pan (Chicken) (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L8.  Sweet and Sour Chicken or Pork (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L9.  Chicken with Cashew Nuts (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L10.  Chicken with Mixed Vegetables (Lunch)</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>L11.  Curry Chicken or Beef (Lunch)Spicy</li>
                      <li>$6.25</li>
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
