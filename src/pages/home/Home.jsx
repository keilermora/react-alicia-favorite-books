import { ReactComponent as Panda } from '../../assets/images/panda.svg';
import styles from './Home.module.scss';

function Home() {
  return <>
    <main className={styles.home}>
      <section className={styles.title}>
        <div className="container">
          <h1>Libros favoritos de Alicia</h1>
          <Panda width="128" height="120"/>
        </div>
      </section>
      <section className={styles.searchResults}>
        <div className="container">
          <h1>Hola</h1>
        </div>
      </section>
    </main>
  </>;
}

export default Home;