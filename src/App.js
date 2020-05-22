import React from 'react';
import { Pager } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';
import FifthComponent from './components/FifthComponent';
import Navigation from './components/Navigation';

import 'animate.css';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = async number => {
    if (number >= this.state.currentPage) {
      switch (number) {
        case 1: number = 2; break;
        case 3: number = 4; break;
        case 5: number = 6; break;
        case 7: number = 8; break;
        default: break;
      }
    } else {
      switch (number) {
        case 1: number = 0; break;
        case 3: number = 2; break;
        case 5: number = 4; break;
        case 7: number = 6; break;
        case 9: number = 8; break;
        default: break;
      }
    }
    this.setState({ currentPage: number });
  };

  getPagesNumbers = async() => {
    const pageNumbers = [];
    const pageNavigation = [
      'hello',
      'like-it',
      'formation',
      'projects',
      'contact'
    ];

    for (let i = 0; i < pageNavigation.length; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i} onSelect={this.handlePageChange}>
          {pageNavigation[i]}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
          animationTimer={500}
        >
          <FirstComponent />
          <div></div>
          <SecondComponent />
          <div></div>
          <ThirdComponent />
          <div></div>
          <FourthComponent />
          <div></div>
          <FifthComponent />
        </ReactPageScroller>
        {/* <Navigation>
          {pagesNumbers}
        </Navigation> */}
      </React.Fragment>
    );
  }
}
