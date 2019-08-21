import React from 'react';
import './style.css';

class Introbox extends React.Component {
  render () {
    return (
      <div>

        <div className='introdiv'>
          <div className='hedypicturebox' id='hedyhandsvartbeige' />
          <div className='introsmalltext'>
            <h1>Our mission is to make a tech imprint for a better world.</h1>
            <h3>We are in it for the long-run, are you?</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default Introbox;
