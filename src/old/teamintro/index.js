import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default () => (
  <Link
    style={{ textDecoration: 'none', color: 'black' }}
    to='/team'
  >
    <div className='fadeinclass'>
      <div className='teampicturebox' id='teampicture'>
        <h3 className='title'>
      GET TO KNOW US
        </h3>
        <div />
      </div>
    </div>
  </Link>
);
