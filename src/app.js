import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { hot } from 'react-hot-loader';
import ScrollToTop from './components/scrolltotop';
import Hamburgermenu from './components/hamburgermenu';
import Fotnot from './components/fotnot';
import './index.css';

class App extends Component {
  componentDidMount() {
    if (typeof document !== 'undefined') {
      const hash = window.location.hash
      if (hash.length && hash.indexOf('#/') !== -1) {
        window.location = hash.slice(1);
      }
    }
  }

  render () {
    return (
      <Root>
        <ScrollToTop>
          <Hamburgermenu />
          <React.Suspense fallback={<span />}>
            <Router>
              <Routes path='*' />
            </Router>
            <Fotnot />
          </React.Suspense>
        </ScrollToTop>
      </Root>
    );
  }
}

export default hot(module)(App);
