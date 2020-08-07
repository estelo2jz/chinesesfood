import React, { Component } from 'react';

import BrowseMenu from './Menu/BrowseMenu/BrowseMenu';

export default class Menu extends Component {
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
                  Food Pictures
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
