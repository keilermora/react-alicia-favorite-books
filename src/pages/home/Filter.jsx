import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER_AUTHOR, SET_FILTER_GENRE, SET_FILTER_SAGA, SET_FILTER_TEXT } from "../../redux/actions";

function Filter() {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);
  const genres = useSelector(state => state.genres);
  const sagas = useSelector(state => state.sagas);
  const filterText = useSelector(state => state.filterText);

  let authorOptions = [];
  let genreOptions = [];
  let sagaOptions = [];

  const setFilterText = e => {
    dispatch({ type: SET_FILTER_TEXT, payload: e.target.value });
  };

  const selectAuthor = e => {
    dispatch({ type: SET_FILTER_AUTHOR, payload: e.target.value });
  }

  const selectGenre = e => {
    dispatch({ type: SET_FILTER_GENRE, payload: e.target.value });
  }

  const selectSaga = e => {
    dispatch({ type: SET_FILTER_SAGA, payload: e.target.value });
  }

  if(authors && authors.length) {
    authorOptions = authors.map((author, index) => <option key={index} value={author}>{author}</option>)
  }

  if(genres && genres.length) {
    genreOptions = genres.map((genre, index) => <option key={index} value={genre}>{genre}</option>)
  }

  if(sagas && sagas.length) {
    sagaOptions = sagas.map((saga, index) => <option key={index} value={saga}>{saga}</option>)
  }

  return <>
    <form>
      <div className="inputGroup">
        <label htmlFor="selectedAuthor">Autor</label>
        <select name="" id="selectedAuthor" onChange={e => selectAuthor(e)}>
          <option value="">Todos</option>
          {authorOptions}
        </select>
      </div>
      <div className="inputGroup">
        <label htmlFor="selectedGenre">Género</label>
        <select name="" id="selectedGenre" onChange={e => selectGenre(e)}>
          <option value="">Todos</option>
          {genreOptions}
        </select>
      </div>
      <div className="inputGroup">
        <label htmlFor="selectedSaga">Saga</label>
        <select name="" id="selectedSaga" onChange={e => selectSaga(e)}>
          <option value="">Todas</option>
          {sagaOptions}
        </select>
      </div>
      <div className="inputGroup">
        <label htmlFor="filterText">Título</label>
        <input id="filterText" type="text" value={filterText} onChange={e => setFilterText(e)}/>
      </div>
    </form>
  </>;
}

export default Filter;
