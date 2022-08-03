import { Book } from 'shared/entities/Book';

export const firebaseDataInitialState = {
  books: [] as Book[],
  authors: [] as string[],
  genres: [] as string[],
  sagas: [] as string[],
};
