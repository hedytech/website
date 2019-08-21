import React from 'react';
import './style.css';

class Academyintro extends React.Component {
  render () {
    return (
      <div>
        <p className='hedytexttiltacademy'>Hedy</p>
        <div className='whatwedoheadertext'>
          <h1>ACADEMY</h1>
        </div>
        <div>
          <p className='whatwedosmalltext'>
            We provide high quality education to close
            the gap between tech and business, and build
            the skills we need to face a future where
            technology will be the main actor.
          </p>
        </div>
      </div>
    );
  }
}

export default Academyintro;
