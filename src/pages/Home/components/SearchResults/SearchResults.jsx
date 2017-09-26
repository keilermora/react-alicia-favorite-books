import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Componentes de SearchResults
import BooksListWithData from './components/BooksList/BooksList';
import AuthorsListWithData from './components/AuthorsList/AuthorsList';
import GenresListWithData from './components/GenresList/GenresList';

// Estilos de SearchResults
import './SearchResults.css';

class SearchResults extends Component {

  // Cargar la data de la búsqueda, ya sean libros, autores o géneros
  loadData() {
    if (this.props.filterType === 'title' || this.props.filterText !== '') {
      return <BooksListWithData />;
    } else if (this.props.filterType === 'author') {
      return <AuthorsListWithData />;
    }
    // else if(props.filterType === 'genre')
    return <GenresListWithData />;
  }

  render() {
    return (
      <div id="search-results-container">
        {this.loadData()}
      </div>
    );
  }
}

SearchResults.propTypes = {
  filterText: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    filterText: state.reducer.get('filterText'),
    filterType: state.reducer.get('filterType'),
  };
}

export default connect(mapStateToProps)(SearchResults);
