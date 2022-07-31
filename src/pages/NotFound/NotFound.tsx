import { Button } from 'shared/components/Button';
import { Container } from 'shared/components/Container';

import styles from './NotFound.module.css';

const NotFound = (): JSX.Element => {
  return (
    <div className={styles.notFound}>
      <Container>
        <div className={styles.content}>
          <p>
            ¿Querías ver una página diferente?
            <br />
            <span>¡Aquí la tienes!</span>
          </p>
          <Button href="/">Volver</Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
