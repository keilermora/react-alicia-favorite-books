import React from 'react';
import PropTypes from 'prop-types';

import './Hyperlink.css';

function Hyperlink(props) {
  const { children } = props;
  const { href } = props;

  return (
    <a className="hyperlink" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Hyperlink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Hyperlink;
