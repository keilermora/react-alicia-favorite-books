import { FC, ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from 'firebase/firestore';
import db from '../../firebase';
import AppState from '../../interfaces/AppState';
import Book from '../../interfaces/Book';
import Button from '../../commons/Button/Button';
import Container from '../../commons/Container/Container';

import styles from './BookDetails.module.css';

const BookDetails: FC = (): ReactElement => {
  let { id }: any = useParams();
  const books: Book[] = useSelector((state: AppState) => state.books);
  const [bookData, setBookData] = useState<Book>();
  const [notFound, setNotFound] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      if (books && books.length) {
        setBookData(books.find((book: Book) => book.id === id));
      } else {
        const querySnapshot: DocumentSnapshot<DocumentData> = await getDoc(
          doc(db, 'books', id)
        );
        const bookData = querySnapshot.data();

        if (bookData) {
          setBookData(bookData as Book);
        } else {
          setNotFound(true);
        }
      }
    };

    fetchData();
  }, [books, id]);

  if (notFound) {
    return (
      <main className={styles.bookDetails}>
        <Container>
          <div className={styles.bookContent}>
            <p>
              El libro seleccionado no se encuentra dentro de la lista de
              favoritos. Tal vez Alicia cambió de opinión... ¯\_(ツ)_/¯
            </p>
          </div>
        </Container>
      </main>
    );
  }

  if (!bookData) {
    return (
      <main className={styles.bookDetails}>
        <Container>
          <div className={styles.bookContent}>
            <p>Cargando...</p>
          </div>
        </Container>
      </main>
    );
  }

  const publishedAtDate = new Date(1970, 0, 1); // Epoch
  publishedAtDate.setSeconds(bookData.publishedAt.seconds);

  const summary = bookData.summary
    .split('\\n')
    .map((str, index) => <p key={index}>{str}</p>);

  return (
    <main className={styles.bookDetails}>
      <Container>
        <div className={styles.bookContent}>
          <Button onClick={history.goBack}>Volver</Button>
          <img src={bookData.imageUrl} alt={bookData.title} width={350} />
          <div className={styles.info}>
            <h1>{bookData.title}</h1>
            <div className={styles.summary}>
              <span className={styles.label}>Fecha publicación:</span>{' '}
              <span>{publishedAtDate.toLocaleDateString()}</span>
              <br />
              <span className={styles.label}>Saga:</span>{' '}
              <span>{bookData.saga}</span>
              <br />
              <span className={styles.label}>Género:</span>{' '}
              <span>{bookData.genre}</span>
            </div>
            {summary}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BookDetails;
