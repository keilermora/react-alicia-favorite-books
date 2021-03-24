import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

function NotFound() {
  return <div className={styles.notFound}>
    <div className="container">
      <div className={styles.content}>
        <h5>¿Querías ver una página diferente?</h5>
        <h3>¡Aquí la tienes!</h3>
        <Link to="/" className="button">
          Volver
        </Link>
      </div>
    </div>
  </div>;
}

export default NotFound;