import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Query de búsqueda de todos los libros
import { allAuthorsQuery } from 'api/queries';

// Estilos de Booklist
import './AuthorsList.css';

// Componentes de AuthorsList
import Author from './components/Author/Author';

class AuthorsList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.data.allAuthors !== this.props.authors && nextProps.data.allAuthors !== 0) {
      return this.props.actions.setAuthors(nextProps.data.allAuthors);
    }
    return false;
  }
  render() {
    if (this.props.data.loading) {
      return (
        <h2 className="state-message">Cargando autores...</h2>
      );
    } else if (!this.props.data.loading && this.props.authors.size === 0) {
      return (
        <h2 className="state-message">Organizando autores...</h2>
      );
    }
    return (
      <div id="authors-list-layout">
        {this.props.authors.map(author => (
          <Author key={author.id} author={author.name} />),
        )}
      </div>
    );
  }
}

AuthorsList.propTypes = {
  actions: PropTypes.shape({
    setAuthors: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    allAuthors: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  }).isRequired,
  authors: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      Name: PropTypes.string,
    })),
  ]).isRequired,
};

const AuthorsListWithData = graphql(allAuthorsQuery)(AuthorsList);

function mapStateToProps(state) {
  return {
    authors: state.reducer.get('authors'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsListWithData);
