import React from 'react';
import './style.css';

class ScrollToTopOnMount extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render () {
    return null;
  }
}

export default ScrollToTopOnMount;
