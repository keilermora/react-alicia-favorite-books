import Book from './Book';

interface AppState {
  books: Book[];
  authors: string[];
  genres: string[];
  sagas: string[];

  filterText: string;
  selectedAuthor: string;
  selectedGenre: string;
  selectedSaga: string;
}

export default AppState;
