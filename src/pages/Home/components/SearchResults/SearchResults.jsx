import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

// Componentes
import LoadingIndicator from '../../../../commons/LoadingIndicator/LoadingIndicator';
import Book from './components/Book/Book';

// Api
import configGraphCool from '../../../../api/configGraphCool';
import { allBooks } from '../../../../api/queries';

// Acciones para actualizar el estado de la app
import { setBookList } from '../../../../redux/actions';

// Estilos
import './SearchResults.css';

class SearchResults extends Component {
  /**
   * Si la lista de libros está vacía, hay que solicitar la data del servidor
   */
  componentDidMount() {
    const { data } = this.props;

    if (!data.books || !data.books.length) {
      const app = this;

      axios({
        method: configGraphCool.method,
        url: configGraphCool.url,
        headers: { 'Content-Type': configGraphCool.contentType },
        data: { query: allBooks },
      })
        .then((response) => {
          app.props.setBookList(response.data.data.allBooks);
        });
    }
  }

  /**
   * Filtra los libros, según los parámetros del filtro
   * @param {object} unfilteredBooks Todos los libros cargados en la base de datos
   * @returns {object} Libros filtrados
   */
  filterBooks(unfilteredBooks) {
    let filteredBooks = unfilteredBooks;
    const { filter } = this.props;

    // Filtrar si hay algún autor seleccionado
    if (filter.author !== '') {
      filteredBooks = filteredBooks
        .filter((book) => book.author.id
          .includes(filter.author));
    }

    // Filtrar si hay algún género seleccionado
    if (filter.genre !== '') {
      filteredBooks = filteredBooks
        .filter((book) => book.genre.id
          .includes(filter.genre));
    }

    // Filtrar si hay alguna saga seleccionada
    if (filter.saga !== '') {
      filteredBooks = filteredBooks
        .filter((book) => book.saga.id
          .includes(filter.saga));
    }

    // Filtrar si el texto del filtro no se encuentre vacío.
    if (filter.text !== '') {
      filteredBooks = filteredBooks
        .filter((book) => book.title.toLowerCase()
          .includes(filter.text.toLowerCase()));
    }

    return filteredBooks;
  }

  render() {
    const { data } = this.props;

    // Si los libros aún no se han cargado, mostrar mensaje
    if (!data.books) {
      return (
        <div className="search-results-component">
          <LoadingIndicator />
        </div>
      );
    }

    // Filtrar los libros
    const books = this.filterBooks(data.books).map((book) => (
      <Book key={book.id} id={book.id} />
    ));

    if (books.length) {
      // Renderizar los libros
      return (
        <div className="search-results-component">
          {books}
        </div>
      );
    }

    return (
      <div className="search-results-component">
        <p>
          <span>Sin resultados en la búsqueda</span>
          <br />
          ¯\_(ツ)_/¯
        </p>
      </div>
    );
  }
}

SearchResults.propTypes = {
  data: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      publishedAt: PropTypes.string,
      imageUrl: PropTypes.string,
      summary: PropTypes.string,
      author: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      genre: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      saga: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    })),
  }).isRequired,
  filter: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    saga: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  data: {
    books: state.data.books,
  },
  filter: {
    text: state.filter.text,
    type: state.filter.type,
    author: state.filter.author,
    genre: state.filter.genre,
    saga: state.filter.saga,
  },
});

const mapDispatchToProps = {
  setBookList: (list) => setBookList(list),
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
