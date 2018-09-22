import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

// Componentes
import LoadingIndicator from '../../../../commons/LoadingIndicator/LoadingIndicator'
import Book from './components/Book/Book'

// Api
import configGraphCool from '../../../../api/configGraphCool'
import { allBooks } from '../../../../api/queries'

// Acciones para actualizar el estado de la app
import { setBookList } from '../../../../redux/actions'

// Estilos
import './SearchResults.css'

class SearchResults extends Component {
  /**
   * Filtra los libros, según los parámetros del filtro
   * @param {object} allBooks Todos los libros cargados en la base de datos
   * @returns {object} Libros filtrados
   */
  filterBooks(allBooks) {

    let filteredBooks = allBooks;

    // Filtrar si hay algún autor seleccionado
    if(this.props.filter.author !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.author.id
          .includes(this.props.filter.author))
    }

    // Filtrar si hay algún género seleccionado
    if(this.props.filter.genre !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.genre.id
          .includes(this.props.filter.genre))
    }

    // Filtrar si hay alguna saga seleccionada
    if(this.props.filter.saga !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.saga.id
          .includes(this.props.filter.saga))
    }

    // Filtrar si el texto del filtro no se encuentre vacío.
    if(this.props.filter.text !== '') {
      filteredBooks = filteredBooks
        .filter(book => book.title.toLowerCase()
          .includes(this.props.filter.text.toLowerCase()))
    }

    return filteredBooks
  }
  /**
   * Si la lista de libros está vacía, hay que solicitar la data del servidor
   */
  componentWillMount() {
    if(!this.props.data.books || this.props.data.books.length === 0) {

      let app = this

      axios({
        method: configGraphCool.method,
        url: configGraphCool.url,
        headers: { 'Content-Type': configGraphCool.contentType },
        data: { 'query': allBooks }
      })
      .then(function(response) {
        app.props.setBookList(response.data.data.allBooks)
      })
    }
  }

  render() {
  
    // Si los libros aún no se han cargado, mostrar mensaje
    if (!this.props.data.books || this.props.data.books === 0) {
      return (
        <div className={'search-results-component'}>
          <LoadingIndicator />
        </div>
      )
    }

    // Filtrar los libros
    let books = this.filterBooks(this.props.data.books).map(book => (
      <Book key={book.id} id={book.id} />
    ));

    // Renderizar los libros
    return (
      <div className={'search-results-component'}>
        {books}     
      </div>
    )
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
        name: PropTypes.string
      }),
      genre: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      }),
      saga: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      })
    }))
  }),
  filter: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    saga: PropTypes.string
  })
}

const mapStateToProps = state => ({
  data: {
    books: state.data.books,
  },
  filter: {
    text: state.filter.text,
    type: state.filter.type,
    author: state.filter.author,
    genre: state.filter.genre,
    saga: state.filter.saga
  }
})

const mapDispatchToProps = {
  setBookList: list => setBookList(list)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
