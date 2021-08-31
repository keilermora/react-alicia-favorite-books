import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  href,
  onClick,
}: any): ReactElement => {
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
