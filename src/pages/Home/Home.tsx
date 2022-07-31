import { Dispatch, useEffect } from 'react';
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { Book } from 'shared/models/Book';
import { db } from 'configs/firebase';
import { FirebaseDataActions, FirebaseDataActionType } from 'shared/stores/firebaseData';
import { useFirebaseDataState } from 'shared/contexts/FirebaseDataState';
import Container from 'shared/components/Container/Container';
import Filter from './Filter';
import BookList from './BookList';

import { ReactComponent as Panda } from 'assets/images/panda.svg';
import styles from './Home.module.css';
import { removeDuplicates } from 'shared/utils/removeDuplicates';

const fetchBooks = async (dispatch: Dispatch<FirebaseDataActionType>) => {
  let books: Book[] = [];

  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'books'));
  querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    books.push({ id: doc.id, ...doc.data() } as Book);
  });

  const authors = removeDuplicates(books.map(({ author }) => author));
  const genres = removeDuplicates(books.map(({ genre }) => genre));
  const sagas = removeDuplicates(books.map(({ saga }) => saga));

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
