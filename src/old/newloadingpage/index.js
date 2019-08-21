import React from 'react';
import './style.css';
import Header from '../header';
import ScrollToTopOnMount from '../scrolltotoponmount';

class Newloadingpage extends React.Component {
  render () {
    return (
      <div className='fadeinclass'>
        <div id='headerpic'>
          <ScrollToTopOnMount />

          <Header />
          <div />
        </div>

      </div>
    );
  }
}

export default Newloadingpage;
