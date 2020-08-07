import React, { Component } from 'react';
import BrowseMenu from './BrowseMenu';

export default class FriedRice extends Component {
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
                  <h1>Fried Rice</h1>
                </div>
              </div>
              <div className="option-menu-info">
                <div className="option-menu-grid-container">
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>24.  Egg Fried Rice</li>
                      <li>(S)$3.95</li>
                      <li>(L)$6.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>25.  Pork or Chicken Fried Rice</li>
                      <li>(S)$4.75</li>
                      <li>(L)$7.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>26.  Shrimp Fried Rice</li>
                      <li>(S)$5.75</li>
                      <li>(L)$8.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>27.  Beef Fried Rice</li>
                      <li>(S)$6.25</li>
                      <li>(L)$9.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>28.  Vegetable Fried Rice</li>
                      <li>(S)$4.55</li>
                      <li>$6.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>29.  Crab Meat Fried Rice</li>
                      <li>(S)$4.75</li>
                      <li>(L)$7.75</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>30.  Mushroom Fried Rice</li>
                      <li>(S)$4.55</li>
                      <li>(L)$6.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>31.  Lobster Fried Rice</li>
                      <li>(S)$6.95</li>
                      <li>(L)$9.95</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>32.  House Special Fried Rice</li>
                      <li>(S)$5.75</li>
                      <li>$8.25</li>
                    </ul>
                  </div>
                  <div className="option-table-flex">
                    <ul>
                      <img src='http://via.placeholder.com/130x130' />
                      <li>33.  Hot & Spicy Jumbo Shrimp Fried Rice</li>
                      <li>(S)$6.95</li>
                      <li>(L)$9.95</li>
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
