import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';
import InteractiveButton from "./interactiveButton";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Zach Sakar's Portfolio</h1>
        <div>
          { moment().format('MMMM Do YYYY, h:mm:ss a') }
        </div>

        <PortfolioContainer />
      </div>
    );
  }
}
