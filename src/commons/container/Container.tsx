import { FC } from 'react';
import { ReactElement } from 'react';
import styles from './Container.module.css';

const Container: FC = ({ children }): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
