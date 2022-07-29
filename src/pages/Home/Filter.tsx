import { ChangeEvent, FC, ReactElement } from 'react';
import { useFilterState } from '../../contexts/FilterState';
import { useFirebaseDataState } from '../../contexts/FirebaseDataState';
import { FilterActions } from '../../stores/filter';
import styles from './Filter.module.css';

const Filter: FC = (): ReactElement => {
  const { filterState, dispatchFilterState } = useFilterState();
  const { firebaseDataState } = useFirebaseDataState();

  const { filterText, selectedAuthor, selectedGenre, selectedSaga } = filterState;
  const { authors, genres, sagas } = firebaseDataState;

  let authorOptions: ReactElement[] = [];
  let genreOptions: ReactElement[] = [];
  let sagaOptions: ReactElement[] = [];

  const setFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchFilterState({ type: FilterActions.SET_FILTER_TEXT, payload: e.target.value });
  };

  const selectAuthor = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatchFilterState({ type: FilterActions.SET_FILTER_AUTHOR, payload: e.target.value });
  };

  const selectGenre = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatchFilterState({ type: FilterActions.SET_FILTER_GENRE, payload: e.target.value });
  };

  const selectSaga = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatchFilterState({ type: FilterActions.SET_FILTER_SAGA, payload: e.target.value });
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
        <select id="selectedAuthor" onChange={(e) => selectAuthor(e)} value={selectedAuthor}>
          <option value="">Todos</option>
          {authorOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedGenre">Género</label>
        <select id="selectedGenre" onChange={(e) => selectGenre(e)} value={selectedGenre}>
          <option value="">Todos</option>
          {genreOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedSaga">Saga</label>
        <select id="selectedSaga" onChange={(e) => selectSaga(e)} value={selectedSaga}>
          <option value="">Todas</option>
          {sagaOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="filterText">Título</label>
        <input id="filterText" type="text" value={filterText} onChange={(e) => setFilterText(e)} />
      </div>
    </form>
  );
};

export default Filter;
