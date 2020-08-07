import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

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
                  <h1>Appetizers (Aperitivos)</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>9.  Roast Pork Egg Roll (1)</li>
                      <li>-</li>
                      <li>$1.40</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>10.  Shrimp Egg Roll (1)</li>
                      <li>-</li>
                      <li>$1.50</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>11.  Vegetable Spring Roll (2)</li>
                      <li>-</li>
                      <li>$2.50</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>12.  Crabmeat Rangoon (8)</li>
                      <li>-</li>
                      <li>$5.00</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>14.  Fried or Steamed Dumpling (6)</li>
                      <li>-</li>
                      <li>$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>15.  French Fries</li>
                      <li>-</li>
                      <li>(L)$3.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>16.  Onion Ring</li>
                      <li>-</li>
                      <li>$3.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>17.  Fried Chicken Wings (3)</li>
                      <li>-</li>
                      <li>$5.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>18.  Chicken on Stick (4)</li>
                      <li>-</li>
                      <li>$4.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>19.  Fried Shrimp (6)</li>
                      <li>-</li>
                      <li>$6.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>20.  Jumbo Shrimp on Stick (2)</li>
                      <li>-</li>
                      <li>$7.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>21.  Boneless Spare Rib</li>
                      <li>(S)$6.25</li>
                      <li>(L)$10.55</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>22.  Fried Plantain</li>
                      <li>-</li>
                      <li>$3.75</li>
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
