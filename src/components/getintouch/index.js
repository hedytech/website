import React from 'react';
import './style.css';

class Getintouch extends React.Component {
  render () {
    return (
      <div>
        <a href='mailto:hello@hedy.tech' style={{ textDecoration: 'none', color: 'white' }}>
          <div className='contactbuttonbox'>
            <button className='contactbutton'>GET IN TOUCH</button>
          </div>
        </a>
      </div>
    );
  }
}

export default Getintouch;
