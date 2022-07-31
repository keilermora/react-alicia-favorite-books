import { Book } from 'models/Book';

export const firebaseDataInitialState = {
  books: [] as Book[],
  authors: [] as string[],
  genres: [] as string[],
  sagas: [] as string[],
};
