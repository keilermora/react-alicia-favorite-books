import { ReactComponent as Panda } from '../../assets/images/panda.svg';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FILTER_TEXT } from '../../redux/actions';
import styles from './Home.module.scss';

function Home() {
  const filterText = useSelector(state => state.filterText);
  const dispatch = useDispatch();

  const setFilterText = e => {
    dispatch({ type: SET_FILTER_TEXT, payload: e.target.value })
  };

  return <>
    <main className={styles.home}>
      <section className={styles.title}>
        <div className="container">
          <h1>Libros favoritos de Alicia</h1>
          <Panda width="128" height="120"/>
        </div>
      </section>
      <section className={styles.books}>
        <div className="container">
          <form>
            <div className="inputGroup">
              <label htmlFor="selectedAuthor">Autor</label>
              <select name="" id="selectedAuthor">
                <option value="0">Todos</option>
              </select>
            </div>
            <div className="inputGroup">
              <label htmlFor="selectedGenre">Género</label>
              <select name="" id="selectedGenre">
                <option value="0">Todos</option>
              </select>
            </div>
            <div className="inputGroup">
              <label htmlFor="selectedSaga">Saga</label>
              <select name="" id="selectedSaga">
                <option value="0">Todas</option>
              </select>
            </div>
            <div className="inputGroup">
              <label htmlFor="filterText">Título {filterText}</label>
              <input id="filterText" type="text" value={filterText} onChange={e => setFilterText(e)}/>
            </div>
          </form>
        </div>
      </section>
    </main>
  </>;
}

export default Home;