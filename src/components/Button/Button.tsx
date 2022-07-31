import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, href, onClick }: ButtonProps): JSX.Element => {
  const classNames = [styles.button, className].join(' ');

  return href ? (
    <Link className={classNames} to={href}>
      {children}
    </Link>
  ) : (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
