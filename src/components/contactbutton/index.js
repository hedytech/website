import React from 'react';
import './style.css';

export default ({ title = 'CONTACT US FOR MORE INFO', href = 'mailto:hello@hedy.tech' }) => (
  <div>
    <a href={href} style={{ textDecoration: 'none', color: 'white' }}>
      <div className='contactbuttonbox'>
        <button className='contactbutton'>{title.toUpperCase()}</button>
      </div>
    </a>
  </div>
);
