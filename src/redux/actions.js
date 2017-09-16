function setAuthors(authors) {
  return {
    type: 'SET_AUTHORS',
    payload: authors,
  };
}

function setBookID(id) {
  return {
    type: 'SET_BOOK_ID',
    payload: id,
  };
}

function setBooks(books) {
  return {
    type: 'SET_BOOKS',
    payload: books,
  };
}

function setFilterText(filterText) {
  return {
    type: 'SET_FILTER_TEXT',
    payload: filterText,
  };
}

function setFilterType(filterType) {
  return {
    type: 'SET_FILTER_TYPE',
    payload: filterType,
  };
}

function setGenres(genres) {
  return {
    type: 'SET_GENRES',
    payload: genres,
  };
}

function setView(view) {
  return {
    type: 'SET_VIEW',
    payload: view,
  };
}

export default {
  setAuthors,
  setBookID,
  setBooks,
  setFilterText,
  setFilterType,
  setGenres,
  setView,
};
