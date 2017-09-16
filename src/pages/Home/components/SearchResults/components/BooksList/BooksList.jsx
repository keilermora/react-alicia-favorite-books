import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Query de búsqueda de todos los libros
import { allBooksQuery } from 'api/queries';

// Estilos de Booklist
import './BooksList.css';

// Componentes de BooksList
import Book from './components/Book/Book';

class BooksList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.data.allBooks !== this.props.books && nextProps.data.allBooks !== 0) {
      this.props.actions.setBooks(nextProps.data.allBooks);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.books !== this.props.books ||
      nextProps.filterText !== this.props.filterText ||
      nextProps.filterType !== this.props.filterType
    ) {
      return true;
    }
    return false;
  }

  filterBooks(allBooks) {
    let filteredBooks = '';

    if (this.props.filterType === 'title') {
      filteredBooks = allBooks
        .filter(book => book.title.toLowerCase()
          .includes(this.props.filterText.toLowerCase()));
    } else if (this.props.filterType === 'author') {
      filteredBooks = allBooks
        .filter(book => book.author.name.toLowerCase()
          .includes(this.props.filterText.toLowerCase()));
    } else { // if (this.props.filterType === 'genre') {
      filteredBooks = allBooks
        .filter(book => book.genre.name.toLowerCase()
          .includes(this.props.filterText.toLowerCase()));
    }

    return filteredBooks;
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h2 className="state-message">Cargando bibloteca...</h2>
      );
    } else if (!this.props.data.loading && this.props.books.size === 0) {
      return (
        <h2 className="state-message">Organizando libros...</h2>
      );
    }

    const books = this.filterBooks(this.props.books).map(book => (
      <Book key={book.id} id={book.id} />
    ));

    return (
      <div id="books-list-layout">
        <CSSTransitionGroup
          transitionName={{
            enter: 'enter',
            enterActive: 'enterActive',
            leave: 'leave',
            leaveActive: 'leaveActive',
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {books}
        </CSSTransitionGroup>
      </div>
    );
  }
}

BooksList.propTypes = {
  actions: PropTypes.shape({
    setBooks: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    allBooks: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  }).isRequired,
  books: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
      }),
      imageUrl: PropTypes.string,
      size: PropTypes.number,
      map: PropTypes.func,
    })),
  ]).isRequired,
  filterText: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
};

const BooksListWithData = graphql(allBooksQuery)(BooksList);

function mapStateToProps(state) {
  return {
    books: state.reducer.get('books'),
    filterText: state.reducer.get('filterText'),
    filterType: state.reducer.get('filterType'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksListWithData);
