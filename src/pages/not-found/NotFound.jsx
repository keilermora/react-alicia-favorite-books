import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

function NotFound() {
  return <div className={styles.notFound}>
    <div className="container">
      <div className={styles.content}>
        <p>
          ¿Querías ver una página diferente?
          <br/><br/>
          <span>¡Aquí la tienes!</span>
        </p>
        <Link to="/" className="button">
          Volver
        </Link>
      </div>
    </div>
  </div>;
}

export default NotFound;