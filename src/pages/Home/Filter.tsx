import { ChangeEvent, FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../interfaces/AppState';
import {
  SET_FILTER_AUTHOR,
  SET_FILTER_GENRE,
  SET_FILTER_SAGA,
  SET_FILTER_TEXT,
} from '../../redux/actions';
import styles from './Filter.module.css';

const Filter: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const authors = useSelector((state: AppState) => state.authors);
  const genres = useSelector((state: AppState) => state.genres);
  const sagas = useSelector((state: AppState) => state.sagas);
  const selectedAuthor = useSelector((state: AppState) => state.selectedAuthor);
  const selectedGenre = useSelector((state: AppState) => state.selectedGenre);
  const selectedSaga = useSelector((state: AppState) => state.selectedSaga);
  const filterText = useSelector((state: AppState) => state.filterText);

  let authorOptions: ReactElement[] = [];
  let genreOptions: ReactElement[] = [];
  let sagaOptions: ReactElement[] = [];

  const setFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_FILTER_TEXT, payload: e.target.value });
  };

  const selectAuthor = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: SET_FILTER_AUTHOR, payload: e.target.value });
  };

  const selectGenre = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: SET_FILTER_GENRE, payload: e.target.value });
  };

  const selectSaga = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: SET_FILTER_SAGA, payload: e.target.value });
  };

  if (authors && authors.length) {
    authorOptions = authors.map((author: string, index: number) => (
      <option key={index} value={author}>
        {author}
      </option>
    ));
  }

  if (genres && genres.length) {
    genreOptions = genres.map((genre: string, index: number) => (
      <option key={index} value={genre}>
        {genre}
      </option>
    ));
  }

  if (sagas && sagas.length) {
    sagaOptions = sagas.map((saga: string, index: number) => (
      <option key={index} value={saga}>
        {saga}
      </option>
    ));
  }

  return (
    <form className={styles.filter}>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedAuthor">Autor</label>
        <select
          id="selectedAuthor"
          onChange={(e) => selectAuthor(e)}
          value={selectedAuthor}
        >
          <option value="">Todos</option>
          {authorOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedGenre">Género</label>
        <select
          id="selectedGenre"
          onChange={(e) => selectGenre(e)}
          value={selectedGenre}
        >
          <option value="">Todos</option>
          {genreOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedSaga">Saga</label>
        <select
          id="selectedSaga"
          onChange={(e) => selectSaga(e)}
          value={selectedSaga}
        >
          <option value="">Todas</option>
          {sagaOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="filterText">Título</label>
        <input
          id="filterText"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e)}
        />
      </div>
    </form>
  );
};

export default Filter;
