import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import styles from "./About.module.scss";

function About() {
  return <main className={styles.about}>
    <div className="container">
      <div className={styles.project}>
        <h1>Alice&#39;s Favorite Books</h1>
        <p>
          Sitio web elaborado por
          &nbsp;
          <a className="hyperlink" href="https://www.linkedin.com/in/keilermora/" target="_blank" rel="noopener noreferrer">
            Keiler Mora
          </a>
          &nbsp;
          con fines demostrativos. El proyecto fue desarrollado usando las librerías de JavaScript
          &nbsp;
          <a className="hyperlink" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          &nbsp;
          y
          &nbsp;
          <a className="hyperlink" href="https://redux.js.org/.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          &nbsp;
          para crear la interfaz de usuario. El código fuente está disponible en
          &nbsp;
          <a className="hyperlink" href="https://github.com/keilermora/alicias-favorite-books" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          .
        </p>
        <Link to="/" className={styles.button}>
          Volver
        </Link>
      </div>
      <div className={styles.dedication}>
        <p>
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
        </p>
      </div>
    </div>
  </main>;
}

export default About;