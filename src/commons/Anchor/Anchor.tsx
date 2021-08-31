import { FC, ReactElement } from 'react';

import styles from './Anchor.module.css';

interface AnchorProps {
  href?: string;
}

const Anchor: FC<AnchorProps> = ({ children, href }): ReactElement => {
  return (
    <a
      className={styles.anchor}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Anchor;
