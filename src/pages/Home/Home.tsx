import { Dispatch, useEffect } from 'react';
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { Book } from '../../models/Book';
import db from '../../firebase';
import { FirebaseDataActions, FirebaseDataActionType } from '../../stores/firebaseData';
import { useFirebaseDataState } from '../../contexts/FirebaseDataState';
import Container from '../../components/Container/Container';
import Filter from './Filter';
import BookList from './BookList';

import { ReactComponent as Panda } from '../../assets/images/panda.svg';
import styles from './Home.module.css';

const fetchBooks: any = async (dispatch: Dispatch<FirebaseDataActionType>) => {
  console.log('hola');
  let books: Book[] = [];
  let authors: string[] = [];
  let genres: string[] = [];
  let sagas: string[] = [];

  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'books'));
  querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    books.push({ id: doc.id, ...doc.data() } as Book);
  });

  authors = books.map((book) => book.author).sort();
  genres = books.map((book) => book.genre).sort();
  sagas = books.map((book) => book.saga).sort();

  dispatch({
    type: FirebaseDataActions.SET_FIREBASE_DATA,
    payload: {
      books,
      authors,
      genres,
      sagas,
    },
  });
};

const Home = () => {
  const { firebaseDataState, dispatchFirebaseData } = useFirebaseDataState();
  const { books } = firebaseDataState;

  console.log('adios');

  useEffect(() => {
    if (books && !books.length) {
      fetchBooks(dispatchFirebaseData);
    }
  }, [books, dispatchFirebaseData]);

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
