import { FC, ReactElement } from 'react';
import Button from '../../commons/Button/Button';
import Container from '../../commons/Container/Container';

import styles from './NotFound.module.css';

const NotFound: FC = (): ReactElement => {
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
