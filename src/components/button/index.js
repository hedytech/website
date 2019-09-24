import React from 'react';
import './index.css';

export default ({ id = '', className = '', children = null, color = '' }) => (
  <div id={id} className={`${className} button ${color.length ? `button-${color}` : ''}`}>
    {children}
  </div>
);
