import React from 'react';
import './style.css';

class Contactbutton extends React.Component {
  render () {
    return (
      <div>
        <a href='mailto:hello@hedy.tech' style={{ textDecoration: 'none', color: 'white' }}>
          <div className='contactbuttonbox'>
            <button className='contactbutton'>CONTACT US FOR MORE INFO</button>
          </div>
        </a>
      </div>
    );
  }
}

export default Contactbutton;
