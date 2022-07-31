import { ReactNode } from 'react';

import styles from './Anchor.module.css';

interface AnchorProps {
  children: ReactNode;
  href: string;
}

const Anchor = ({ children, href }: AnchorProps): JSX.Element => {
  return (
    <a className={styles.anchor} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Anchor;
