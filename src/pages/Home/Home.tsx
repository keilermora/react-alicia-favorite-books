import { Dispatch, FC, ReactElement, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';
import { AnyAction, Store } from 'redux';
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import db from '../../firebase';
import { SET_FIREBASE_DATA } from '../../redux/actions';
import Book from '../../interfaces/Book';
import AppState from '../../interfaces/AppState';
import BookList from './BookList';
import Filter from './Filter';
import Container from '../../commons/Container/Container';
import { ReactComponent as Panda } from '../../assets/images/panda.svg';
import styles from './Home.module.css';

const fetchBooks: any = async (dispatch: Dispatch<AnyAction>) => {
  let books: Book[] = [];
  let authors: string[] = [];
  let genres: string[] = [];
  let sagas: string[] = [];

  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
    collection(db, 'books')
  );
  querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    books.push({ id: doc.id, ...doc.data() } as Book);
  });

  authors = [...new Set(books.map((book) => book.author))].sort();
  genres = [...new Set(books.map((book) => book.genre))].sort();
  sagas = [...new Set(books.map((book) => book.saga))].sort();

  dispatch({
    type: SET_FIREBASE_DATA,
    payload: {
      books,
      authors,
      genres,
      sagas,
    },
  });
};

const Home: FC = (): ReactElement => {
  const store: Store<any, AnyAction> = useStore();
  const books: Book[] = useSelector((state: AppState): Book[] => state.books);

  useEffect(() => {
    if (books && !books.length) {
      store.dispatch(fetchBooks);
    }
  }, [books, store]);

  return (
    <main className={styles.home}>
      <section className={styles.title}>
        <Container>
          <h1>Libros favoritos de Alicia</h1>
          <Panda width="128" height="120" />
        </Container>
      </section>
      <section className={styles.books}>
        <Container>
          <div className="filter">
            <Filter />
          </div>
          <div className="list">
            <BookList />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
