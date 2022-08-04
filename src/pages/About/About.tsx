import ScrollAnimation from 'react-animate-on-scroll';
import { Anchor, Button, Container } from 'shared/components';
import styles from './About.module.css';

const About = () => {
  return (
    <main className={styles.about}>
      <Container>
        <div className={styles.project}>
          <h1>Alicia&#39;s Favorite Books</h1>
          <p>
            Aplicación web elaborada por{' '}
            <Anchor href="https://www.linkedin.com/in/keilermora/">Keiler Mora</Anchor> con fines
            demostrativos. El proyecto fue desarrollado usando las librerías de JavaScript{' '}
            <Anchor href="https://reactjs.org/">React</Anchor> (¡Hooks!) y{' '}
            <Anchor href="https://redux.js.org/.org/">Redux</Anchor> para crear la interfaz de
            usuario, en comunicación con data alojada en{' '}
            <Anchor href="https://firebase.google.com/">Firebase</Anchor>. El código fuente está
            disponible en{' '}
            <Anchor href="https://github.com/keilermora/alicias-favorite-books">Github</Anchor>.
          </p>
          <Button href="/">Volver</Button>
        </div>
        <div className={styles.dedication}>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h3>- I&#39;ll be here...</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h3>- Why..?</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h3>- I&#39;ll be &#39;waiting&#39; here...</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h3>- For what?</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h3>
                - I&#39;ll be waiting... for you... so...
                <br />
                if you come here...
                <br />
                you&#39;ll find me.
                <br />I promise.
              </h3>
            </ScrollAnimation>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;
