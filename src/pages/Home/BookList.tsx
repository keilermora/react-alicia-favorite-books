import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppState from '../../interfaces/AppState';
import Book from '../../interfaces/Book';

import styles from './BookList.module.css';

const BookList: FC = (): ReactElement => {
  const books: Book[] = useSelector((state: AppState) => state.books);
  const selectedAuthor: string = useSelector(
    (state: AppState) => state.selectedAuthor
  );
  const selectedGenre: string = useSelector(
    (state: AppState) => state.selectedGenre
  );
  const selectedSaga: string = useSelector(
    (state: AppState) => state.selectedSaga
  );
  const filterText: string = useSelector((state: AppState) => state.filterText);

  /**
   * Filtra los libros, según los parámetros del filtro
   * @param {object} unfilteredBooks Todos los libros cargados en la base de datos
   * @returns {object} Libros filtrados
   */
  const filterBooks = (unfilteredBooks: Book[]): Book[] => {
    let filteredBooks: Book[] = unfilteredBooks;

    // Filtrar si hay algún autor seleccionado
    if (selectedAuthor !== '') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.author.includes(selectedAuthor)
      );
    }

    // Filtrar si hay algún género seleccionado
    if (selectedGenre !== '') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.genre.includes(selectedGenre)
      );
    }

    // Filtrar si hay alguna saga seleccionada
    if (selectedSaga !== '') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.saga.includes(selectedSaga)
      );
    }

    // Filtrar si el texto del filtro no se encuentre vacío.
    if (filterText !== '') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.title.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    return filteredBooks;
  };

  // Si los libros aún no se han cargado, mostrar mensaje
  if (!books || !books.length) {
    return (
      <div className={styles.bookList}>
        <h1>Cargando...</h1>
      </div>
    );
  }

  const filteredBooks = filterBooks(books);

  if (!filteredBooks.length) {
    return (
      <div className={styles.bookList}>
        <h1>Sin resultados ¯\_(ツ)_/¯</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.bookList}>
        {filteredBooks.map((book: Book) => (
          <div className={styles.book} key={book.id}>
            <Link to={`/book/${book.id}`}>
              <img
                src={book.imageUrl}
                alt={book.title}
                width={226}
                height={350}
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default BookList;
