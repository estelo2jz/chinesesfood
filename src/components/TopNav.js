import React, { Component } from 'react'

export default class TopNav extends Component {
  render() {
    return (
      <div className="top-nav-container">
        <div className="top-nav-title">
          <p>Chinese Restaurant</p> 
        </div>
        <div className="top-nav-number">
          <p>Tel.: 847-662-1388</p>
          <p>Fax: 847-662-9362</p>
        </div>
        <div className="top-nav-address">
          <p>1802 Washington Street, Waukegan, IL 60085</p>
        </div>
      </div>
    )
  }
}
