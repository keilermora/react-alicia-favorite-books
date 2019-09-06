import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Api
import configGraphCool from '../../../../api/configGraphCool';
import { allFilterParams } from '../../../../api/queries';

// Componentes
import LoadingIndicator from '../../../../commons/LoadingIndicator/LoadingIndicator';

// Acciones para actualizar el estado de la app
import {
  setFilterText,
  setFilterAuthor,
  setFilterGenre,
  setFilterSaga,
  setAuthorList,
  setGenreList,
  setSagaList,
} from '../../../../redux/actions';

// Estilos
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateFilterAuthor = this.updateFilterAuthor.bind(this);
    this.updateFilterGenre = this.updateFilterGenre.bind(this);
    this.updateFilterSaga = this.updateFilterSaga.bind(this);
  }

  /**
   * Si la lista de autores está vacía, hay que solicitar la data del
   * servidor para los autores, géneros y sagas
   */
  componentWillMount() {
    const { data } = this.props;
    if (!data.authors || data.authors.length === 0) {
      const app = this;

      axios({
        method: configGraphCool.method,
        url: configGraphCool.url,
        headers: { 'Content-Type': configGraphCool.contentType },
        data: { query: allFilterParams },
      })
        .then((response) => {
          app.props.setAuthorList(response.data.data.allAuthors);
          app.props.setGenreList(response.data.data.allGenres);
          app.props.setSagaList(response.data.data.allSagas);
        });
    }
  }

  /**
   * Actualizar el texto del filtro
   */
  updateFilterText(e) {
    return this.props.setFilterText(e.target.value);
  }

  /**
   * Actualizar el autor del filtro
   */
  updateFilterAuthor(e) {
    return this.props.setFilterAuthor(e.target.value);
  }

  /**
   * Actualizar el género del filtro
   */
  updateFilterGenre(e) {
    return this.props.setFilterGenre(e.target.value);
  }

  /**
   * Actualizar la saga del filtro
   */
  updateFilterSaga(e) {
    return this.props.setFilterSaga(e.target.value);
  }

  render() {
    const { data, filter } = this.props;

    if (!data.authors || data.authors.length === 0) {
      return (
        <div className="filter-component">
          <LoadingIndicator />
        </div>
      );
    }

    // Obtener autores
    const authors = data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
    ));

    // Obtener géneros
    const genres = data.genres.map(genre => (
      <option key={genre.id} value={genre.id}>{genre.name}</option>
    ));

    // Obtener sagas
    const sagas = data.sagas.map(saga => (
      <option key={saga.id} value={saga.id}>{saga.name}</option>
    ));

    return (
      <div className="filter-component">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <label htmlFor="filter-author">
                <span>Autor(a)</span>
                <select id="filter-author" onChange={this.updateFilterAuthor} defaultValue={filter.author}>
                  <option value="">Todos</option>
                  {authors}
                </select>
              </label>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <label htmlFor="filter-genre">
                <span>Género</span>
                <select id="filter-genre" onChange={this.updateFilterGenre} defaultValue={filter.genre}>
                  <option value="">Todos</option>
                  {genres}
                </select>
              </label>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <label htmlFor="filter-saga">
                <span>Saga</span>
                <select id="filter-saga" onChange={this.updateFilterSaga} defaultValue={filter.saga}>
                  <option value="">Todas</option>
                  {sagas}
                </select>
              </label>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <label htmlFor="filter-text">
                <span>Título</span>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <FontAwesomeIcon icon="search" />
                  </div>
                  <input id="filter-text" type="text" className="form-control" onChange={this.updateFilterText} value={filter.text} />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
    sagas: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
  }).isRequired,
  filter: PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    saga: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  data: {
    authors: state.data.authors,
    genres: state.data.genres,
    sagas: state.data.sagas,
  },
  filter: {
    text: state.filter.text,
    author: state.filter.author,
    genre: state.filter.genre,
    saga: state.filter.saga,
  },
});

const mapDispatchToProps = {
  setFilterText: text => setFilterText(text),
  setFilterAuthor: author => setFilterAuthor(author),
  setFilterGenre: genre => setFilterGenre(genre),
  setFilterSaga: saga => setFilterSaga(saga),
  setAuthorList: authors => setAuthorList(authors),
  setGenreList: genres => setGenreList(genres),
  setSagaList: sagas => setSagaList(sagas),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
