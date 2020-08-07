import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class LoMien extends Component {
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
                  <h1>Lo Mien</h1>
                  <p>Soft Noodle</p>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>34.  Chicken or Roast Pork Lo Mein</li>
                      <li>(S)$5.5</li>
                      <li>(L)$7.55</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>35.  Shrimp Lo Mein</li>
                      <li>(S)$5.95</li>
                      <li>(L)$8.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>35a.  Beef Lo Mein</li>
                      <li>(S)$6.95</li>
                      <li>(L)$9.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>36.  Vegetable Lo Mein</li>
                      <li>(S)$4.75</li>
                      <li>(L)$7.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>37.  Lobster Lo Mein</li>
                      <li>(S)$6.95</li>
                      <li>(L)$9.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>38.  House Special Lo Mein</li>
                      <li>(S)$5.95</li>
                      <li>(L)$8.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>39.  Hot Spicy Jumbo Shrimp Lo Mein</li>
                      <li>(S)$6.95</li>
                      <li>(L)$10.25</li>
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
