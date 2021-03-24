import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

function Navbar() {
  return <>
    <nav className={styles.navbar}>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>;
}

export default Navbar;