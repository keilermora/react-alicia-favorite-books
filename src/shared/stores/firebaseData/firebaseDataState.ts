import Book from 'shared/interfaces/Book';

export const firebaseDataInitialState = {
  books: [] as Book[],
  authors: [] as string[],
  genres: [] as string[],
  sagas: [] as string[],
};
