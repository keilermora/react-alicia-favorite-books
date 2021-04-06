import { ReactComponent as Panda } from "../../assets/images/panda.svg";
import { useSelector, useStore } from "react-redux";
import firebase from "../../firebase";
import { SET_FIREBASE_DATA } from "../../redux/actions";
import styles from "./Home.module.scss";
import BookList from "./BookList";
import Filter from "./Filter";
import Footer from "../../commons/footer/Footer";

const fetchBooks = async(dispatch) => {
  let books = [];
  let authors = [];
  let genres = [];
  let sagas = [];

  const querySnapshot = await firebase.collection('books').orderBy('publishedAt').get();
  querySnapshot.forEach(doc => {
    books.push({ id: doc.id, ...doc.data()});
  });

  authors = [...new Set (books.map(book => book.author))].sort();
  genres = [...new Set (books.map(book => book.genre))].sort();
  sagas = [...new Set (books.map(book => book.saga))].sort();

  dispatch({ type: SET_FIREBASE_DATA, payload: {
    books,
    authors,
    genres,
    sagas,
  }});
}

function Home() {
  const store = useStore();
  const books = useSelector(state => state.books);

  if(books && !books.length) {
    store.dispatch(fetchBooks);
  }

  return <>
    <main className={styles.home}>
      <section className={styles.title}>
        <div className="container">
          <h1>Libros favoritos de Alicia</h1>
          <Panda width="128" height="120"/>
        </div>
      </section>
      <section className={styles.books}>
        <div className="container">
          <div className="filter">
            <Filter />
          </div>
          <div className="list">
            <BookList />
          </div>
        </div>
        <Footer />
      </section>
    </main>
  </>;
}

export default Home;