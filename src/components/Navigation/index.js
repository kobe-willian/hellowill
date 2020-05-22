import React from 'react';

import './styles.css';

export default (props) => {
  return (
    <nav>
      {props.children}
    </nav>
  );
};