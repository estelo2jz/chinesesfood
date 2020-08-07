import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

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
                  <h1>Beef (Carne De Res)</h1>
                  <p>with White Rice</p>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>66.  Beef with Broccoli</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>67.  Pepper Steak with Onion</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>Pepper Steak with Tomato</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>69.  Beef with Chinese Vegetable</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>70.  Beef with Mushrooms</li>
                      <li>(S)$7.45</li>
                      <li>(L)$11.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>71.  Beef with Snow Peas</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>72.  Beef with Curry Sauce</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.45</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>73.  Beef with Mixed Veg.</li>
                      <li>(S)$6.75</li>
                      <li>(L)$11.45</li>
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
