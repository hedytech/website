import React from 'react';
import './style.css';
import { Link } from '@reach/router';

export default () => (
  <Link
    style={{ textDecoration: 'none', color: 'black' }}
    to='/team'
  >
    <div className='fadeinclass'>
      <div className='teampicturebox teampicture'>
        <h3 className='title'>
      GET TO KNOW US
        </h3>
        <div />
      </div>
    </div>
  </Link>
);
