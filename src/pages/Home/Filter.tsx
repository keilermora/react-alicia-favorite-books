import { ChangeEvent, ReactElement } from 'react';

import { FilterActions } from 'shared/stores/filter';
import { useFilterState } from 'shared/contexts/FilterState';
import { useFirebaseDataState } from 'shared/contexts/FirebaseDataState';

import styles from './Filter.module.css';

const Filter = (): JSX.Element => {
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

  if (authors?.length) {
    authorOptions = authors.map((author: string, index: number) => (
      <option key={index} value={author}>
        {author}
      </option>
    ));
  }

  if (genres?.length) {
    genreOptions = genres.map((genre: string, index: number) => (
      <option key={index} value={genre}>
        {genre}
      </option>
    ));
  }

  if (sagas?.length) {
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
        <select id="selectedAuthor" onChange={selectAuthor} value={selectedAuthor}>
          <option value="">Todos</option>
          {authorOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedGenre">Género</label>
        <select id="selectedGenre" onChange={selectGenre} value={selectedGenre}>
          <option value="">Todos</option>
          {genreOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedSaga">Saga</label>
        <select id="selectedSaga" onChange={selectSaga} value={selectedSaga}>
          <option value="">Todas</option>
          {sagaOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="filterText">Título</label>
        <input id="filterText" type="text" value={filterText} onChange={setFilterText} />
      </div>
    </form>
  );
};

export default Filter;
