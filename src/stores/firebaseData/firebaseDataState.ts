import { Book } from '../../models/Book';

export interface FirebaseDataState {
  books: Book[];
  authors: string[];
  genres: string[];
  sagas: string[];
}

export const firebaseDataInitialState: FirebaseDataState = {
  books: [],
  authors: [],
  genres: [],
  sagas: [],
};
