import React from 'react';

import styles from './Anchor.module.css';

interface AnchorProps {
  children: string;
  href?: string;
}

const Anchor = ({ children, href }: AnchorProps) => {
  return (
    <a className={styles.anchor} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Anchor;
