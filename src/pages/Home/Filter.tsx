import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import useFilterState from 'shared/hooks/useFilterState';
import useFirebaseDataState from 'shared/hooks/useFirebaseDataState';
import useQueryParams from 'shared/hooks/useQueryParams';
import { FilterActions, FilterState } from 'shared/stores/filter';
import QueryParams from 'shared/interfaces/QueryParams';
import styles from './Filter.module.css';

const Filter = (): JSX.Element => {
  const [isFormModified, setIsFormModified] = useState(false);

  const { filterState, dispatchFilterState } = useFilterState();
  const { firebaseDataState } = useFirebaseDataState();
  const { queryParams, setQueryParams } = useQueryParams();

  const { filterText, selectedAuthor, selectedGenre, selectedSaga } = filterState;
  const { authors, genres, sagas } = firebaseDataState;

  /**
   * Update filter form based on query params
   */
  useEffect(() => {
    const { filterText, selectedAuthor, selectedGenre, selectedSaga } = filterState;

    const filter: FilterState = {
      filterText: queryParams.get('text') || filterText,
      selectedAuthor: queryParams.get('author') || selectedAuthor,
      selectedGenre: queryParams.get('genre') || selectedGenre,
      selectedSaga: queryParams.get('saga') || selectedSaga,
    };

    dispatchFilterState({ type: FilterActions.SET_FILTER, payload: filter });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Update query params each time the filterState is modified
   */
  useEffect(() => {
    if (isFormModified) {
      const { filterText, selectedAuthor, selectedGenre, selectedSaga } = filterState;

      const newQueryParams: QueryParams = {
        text: filterText,
        author: selectedAuthor,
        genre: selectedGenre,
        saga: selectedSaga,
      };

      setQueryParams(newQueryParams);
    }
  }, [filterState, isFormModified, setQueryParams]);

  const modifyForm = useMemo(
    () => () => {
      if (!isFormModified) {
        setIsFormModified(true);
      }
    },
    [isFormModified]
  );

  const onChangeFilterText = useMemo(
    () => (e: ChangeEvent<HTMLInputElement>) => {
      modifyForm();
      dispatchFilterState({ type: FilterActions.SET_FILTER_TEXT, payload: e.target.value });
    },
    [dispatchFilterState, modifyForm]
  );

  const onChangeAuthor = useMemo(
    () => (e: ChangeEvent<HTMLSelectElement>) => {
      modifyForm();
      dispatchFilterState({ type: FilterActions.SET_FILTER_AUTHOR, payload: e.target.value });
    },
    [dispatchFilterState, modifyForm]
  );

  const onChangeGenre = useMemo(
    () => (e: ChangeEvent<HTMLSelectElement>) => {
      modifyForm();
      dispatchFilterState({ type: FilterActions.SET_FILTER_GENRE, payload: e.target.value });
    },
    [dispatchFilterState, modifyForm]
  );

  const onChangeSaga = useMemo(
    () => (e: ChangeEvent<HTMLSelectElement>) => {
      modifyForm();
      dispatchFilterState({ type: FilterActions.SET_FILTER_SAGA, payload: e.target.value });
    },
    [dispatchFilterState, modifyForm]
  );

  return (
    <form className={styles.filter}>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedAuthor">Autor</label>
        <select id="selectedAuthor" onChange={onChangeAuthor} value={selectedAuthor}>
          <option value="">Todos</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedGenre">Género</label>
        <select id="selectedGenre" onChange={onChangeGenre} value={selectedGenre}>
          <option value="">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedSaga">Saga</label>
        <select id="selectedSaga" onChange={onChangeSaga} value={selectedSaga}>
          <option value="">Todas</option>
          {sagas.map((saga) => (
            <option key={saga} value={saga}>
              {saga}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="filterText">Título</label>
        <input id="filterText" type="text" value={filterText} onChange={onChangeFilterText} />
      </div>
    </form>
  );
};

export default Filter;
