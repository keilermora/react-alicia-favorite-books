import React from 'react';
import { CircleLoader } from 'react-spinners';

import './LoadingIndicator.css';

function LoadingIndicator() {
  return (
    <CircleLoader color="#ed3655" size={100} />
  );
}

export default LoadingIndicator;
