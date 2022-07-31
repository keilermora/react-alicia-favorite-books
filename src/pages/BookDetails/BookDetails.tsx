import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore';

import { Button } from 'shared/components/Button';
import { Container } from 'shared/components/Container';
import { Book } from 'shared/models/Book';
import { useFirebaseDataState } from 'shared/contexts/FirebaseDataState';

import styles from './BookDetails.module.css';
import { db } from 'configs/firebase';

const BookDetails = (): JSX.Element => {
  let { id }: any = useParams();
  const { firebaseDataState } = useFirebaseDataState();
  const { books } = firebaseDataState;

  const [bookData, setBookData] = useState<Book>({} as Book);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      let bookDataFound;

      if (books && books.length) {
        bookDataFound = books.find((book: Book) => book.id === id);
      } else {
        const querySnapshot: DocumentSnapshot<DocumentData> = await getDoc(doc(db, 'books', id));
        bookDataFound = querySnapshot.data();
      }

      if (bookDataFound) {
        setBookData(bookDataFound as Book);
      } else {
        setNotFound(true);
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
              El libro seleccionado no se encuentra dentro de la lista de favoritos. Tal vez Alicia
              cambió de opinión... ¯\_(ツ)_/¯
            </p>
          </div>
        </Container>
      </main>
    );
  }

  if (!bookData.summary) {
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
    .map((str: string, index: number) => <p key={index}>{str}</p>);

  return (
    <main className={styles.bookDetails}>
      <Container>
        <div className={styles.bookContent}>
          <Button onClick={goBack}>Volver</Button>
          <img src={bookData.imageUrl} alt={bookData.title} width={350} />
          <div className={styles.info}>
            <h1>{bookData.title}</h1>
            <div className={styles.summary}>
              <span className={styles.label}>Fecha publicación:</span>{' '}
              <span>{publishedAtDate.toLocaleDateString()}</span>
              <br />
              <span className={styles.label}>Saga:</span> <span>{bookData.saga}</span>
              <br />
              <span className={styles.label}>Género:</span> <span>{bookData.genre}</span>
            </div>
            {summary}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BookDetails;
