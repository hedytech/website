import React from 'react';
import { Location } from '@reach/router';

export default ({ children }) => (
  <Location>
    {() => {
      if (typeof document !== 'undefined') {
        window.scrollTo(0, 0);
      }
      return children || null;
    }}
  </Location>
);
