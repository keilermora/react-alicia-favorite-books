import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Query de búsqueda de todos los libros
import { allGenresQuery } from 'api/queries';

// Estilos de Booklist
import './GenresList.css';

// Componentes de AuthorsList
import Genre from './components/Genre/Genre';

class GenresList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.data.allGenres !== this.props.genres && nextProps.data.allGenres !== 0) {
      return this.props.actions.setGenres(nextProps.data.allGenres);
    }
    return false;
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h2 className="state-message">Cargando géneros...</h2>
      );
    } else if (!this.props.data.loading && this.props.genres.size === 0) {
      return (
        <h2 className="state-message">Organizando géneros...</h2>
      );
    }
    return (
      <div id="genres-list-layout">
        {this.props.genres.map(genre => (
          <Genre key={genre.id} genre={genre.name} />),
        )}
      </div>
    );
  }
}

GenresList.propTypes = {
  actions: PropTypes.shape({
    setGenres: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    allGenres: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  }).isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      Name: PropTypes.string,
    })),
  ]).isRequired,
};

const GenresListWithData = graphql(allGenresQuery)(GenresList);

function mapStateToProps(state) {
  return {
    genres: state.reducer.get('genres'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresListWithData);
