import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Footer from "../../commons/footer/Footer";
import firebase from "../../firebase";
import styles from "./Book.module.scss";

const Book = () => {
  let { id } = useParams();
  const books = useSelector(state => state.books);
  const [ bookData, setBookData ] = useState();
  const [ notFound, setNotFound ] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      if(books && books.length) {
        setBookData(books.find(book => book.id === id));
      } else {
        const querySnapshot = await firebase.collection('books').doc(id).get();
        const bookData = querySnapshot.data();

        if(bookData) {
          setBookData(bookData);
        } else {
          setNotFound(true);
        }
      }
    };
 
    fetchData();
  }, [books, id]);

  if(notFound) {
    return <>
      <main className={styles.book}>
        <div className="container">
          <div className={styles.bookContent}>
            <p>
              El libro seleccionado no se encuentra dentro de la lista de favoritos.
              Tal vez Alicia cambió de opinión... ¯\_(ツ)_/¯
            </p>
          </div>
        </div>
      </main>
    </>;
  }


  if(!bookData) {
    return <>
      <main className={styles.book}>
        <div className="container">
          <div className={styles.bookContent}>
            <p>
              Cargando...
            </p>
          </div>
        </div>
      </main>
    </>;
  }

  const publishedAtDate = new Date(1970, 0, 1); // Epoch
  publishedAtDate.setSeconds(bookData.publishedAt.seconds);

  const summary = bookData.summary.split('\\n').map((str, index) => <p key={index}>{str}</p>);

  return <>
    <main className={styles.book}>
      <div className="container">
        <div className={styles.bookContent}>
          <button className={styles.goBackButton} onClick={history.goBack}>Volver</button>
          <img src={bookData.imageUrl} alt={bookData.title} width={350}/>
          <div className={styles.info}>
            <h1>{bookData.title}</h1>
            <div className={styles.bookDetails}>
              <span className={styles.label}>Fecha publicación:</span> <span>{publishedAtDate.toLocaleDateString()}</span><br/>
              <span className={styles.label}>Saga:</span> <span>{bookData.saga}</span><br/>
              <span className={styles.label}>Género:</span> <span>{bookData.genre}</span>
            </div>
            {summary}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </>;
}

export default Book;
