import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import styles from "./About.module.scss";

function About() {
  return <main className={styles.about}>
    <div className="container">
      <div className={styles.project}>
        <h1>Alicia&#39;s Favorite Books</h1>
        <p>
          Aplicación web elaborada por
          {' '}
          <a className="hyperlink" href="https://www.linkedin.com/in/keilermora/" target="_blank" rel="noopener noreferrer">
            Keiler Mora
          </a>
          {' '}
          con fines demostrativos. El proyecto fue desarrollado usando las librerías de JavaScript
          {' '}
          <a className="hyperlink" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          {' '}
          (¡Hooks!) y
          {' '}
          <a className="hyperlink" href="https://redux.js.org/.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          {' '}
          para crear la interfaz de usuario, en comunicación con data alojada en
          {' '}
          <a className="hyperlink" href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
            Firebase
          </a>
          . El código fuente está disponible en
          {' '}
          <a className="hyperlink" href="https://github.com/keilermora/alicias-favorite-books" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          .
        </p>
        <Link to="/" className="button">
          Volver
        </Link>
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
              <br />
              I promise.
            </h3>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </main>;
}

export default About;