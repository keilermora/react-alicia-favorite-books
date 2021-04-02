import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookList = () => {
  const books = useSelector(state => state.books);
  const selectedAuthor = useSelector(state => state.selectedAuthor);
  const selectedGenre = useSelector(state => state.selectedGenre);
  const selectedSaga = useSelector(state => state.selectedSaga);
  const filterText = useSelector(state => state.filterText);

  /**
   * Filtra los libros, según los parámetros del filtro
   * @param {object} unfilteredBooks Todos los libros cargados en la base de datos
   * @returns {object} Libros filtrados
   */
  const filterBooks = unfilteredBooks => {
    let filteredBooks = unfilteredBooks;

    // Filtrar si hay algún autor seleccionado
    if(selectedAuthor !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.author.includes(selectedAuthor));
    }

    // Filtrar si hay algún género seleccionado
    if(selectedGenre !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.genre.includes(selectedGenre));
    }

    // Filtrar si hay alguna saga seleccionada
    if(selectedSaga !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.saga.includes(selectedSaga));
    }

    // Filtrar si el texto del filtro no se encuentre vacío.
    if(filterText !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.title.toLowerCase().includes(filterText.toLowerCase()));
    }

    return filteredBooks;
  }

  // Si los libros aún no se han cargado, mostrar mensaje
  if (!books || !books.length) {
    return (
      <h1>Cargando</h1>
    );
  }

  const filteredBooks = filterBooks(books);

  if(!filteredBooks.length) {
    return (
      <h1>Sin resultados ¯\_(ツ)_/¯</h1>
    )
  } else {
    const bookImages = filteredBooks.map(book => (
      <Link to={`/book/${book.id}`}>
        <img
          key={book.id}
          src={book.imageUrl}
          alt={book.title}
          width={226}
          height={350}
        />
      </Link>
    ));

    return <>
      <div>
        {bookImages}
      </div>
    </>;
  }
}

export default BookList;
