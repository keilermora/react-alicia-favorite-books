import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import styles from './Navbar.module.css';

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
