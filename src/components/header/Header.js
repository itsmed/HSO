import React, { Component } from 'react';


import './header.scss';

export default class Header extends Component {

  render() {

    return <div>
      <div className="header-background"></div>
      <div clasName="header">
        <h1>Hidden Star Orchards</h1>
      </div>
    </div>;
  }
}