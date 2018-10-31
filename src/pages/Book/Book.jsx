import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Api
import configGraphCool from '../../api/configGraphCool'
import { allBooks } from '../../api/queries'

// Componentes
import LoadingIndicator from '../../commons/LoadingIndicator/LoadingIndicator'

// Acciones para actualizar el estado de la app
import { setBookList, setPreviousRoute, setCurrentRoute } from '../../redux/actions'

// Estilos
import './Book.css'

class Book extends Component {
  constructor(props) {
    super(props)
    this.book = null
    this.bookId = this.props.match.params.id
    this.getBookInfo = this.getBookInfo.bind(this)
    this.updateRoute = this.updateRoute.bind(this)    
    this.getMonthName = this.getMonthName.bind(this)
  }
  /**
   * Obtener la información del libro, de acuerdo a la base de datos "local" de libros
   * @param {any} books Lista de libros 
   */
  getBookInfo(books) {

    this.book = books.find(book => { return book.id ===  this.bookId })

    if(this.book) {

      this.book.exists = true;

      // Separar la fecha de publicación del libro, el cual tiene formato yyyy-dd-mm
      this.publishedAt = {
        day: this.book.publishedAt.slice(8, 10),
        month: this.getMonthName(this.book.publishedAt.slice(5, 7)),
        year: this.book.publishedAt.slice(0, 4)
      }
    }
    else {
      this.book = { exists: false};
    }

    // Actualizar el estado
    if(this.props.data.books.length === 0) {
      this.props.setBookList(books)
    }
  }
  /**
   * Traducir el mes de la fecha de publicación, el cual viene en números
   */
  getMonthName(month) {
    switch(month) {
      case '01': return 'ene'
      case '02': return 'feb'
      case '03': return 'mar'
      case '04': return 'abr'
      case '05': return 'may'
      case '06': return 'jun'
      case '07': return 'jul'
      case '08': return 'ago'
      case '09': return 'sep'
      case '10': return 'oct'
      case '11': return 'nov'
      default: return 'dic'
    }
  }
  /**
   * Si el usuario cambia la vista, actualizar la ruta
   */
  updateRoute() {
    return this.props.setPreviousRoute('Book')
  }

  componentWillMount() {
    this.props.setCurrentRoute('Book')
    let app = this

    // Si en el estado no existe la lista de libros, hay que cargarlos...
    // Ésta condición sólo sucederá si el usuario ha ingresado al libro desde un enlace externo
    // y no desde el home
    if(this.props.data.books.length === 0) {

      axios({
        method: configGraphCool.method,
        url: configGraphCool.url,
        headers: { 'Content-Type': configGraphCool.contentType },
        data: { 'query': allBooks }
      })
      .then(function(response) {
        app.getBookInfo(response.data.data.allBooks);
      })
    }
    else {
      app.getBookInfo(app.props.data.books);
    }
  }

  render() {
    window.pageYOffset = 0
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Si el libro aún no se han cargado, mostrar loader
    if(!this.book) {
      return (
        <div className={'book-page'}>
          <LoadingIndicator />
        </div>
      )
    }
    // Si el libro ya se cargó, mostrar libro
    else if(this.book.exists) {
      return (
        <div className={'book-page'}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-sm-12 col-md-3 col-lg-4'}>
                <img src={this.book.imageUrl} alt={this.book.title} />
              </div>
              <div className={'col-sm-12 col-md-9 col-lg-8'}>
                <h1>{this.book.title}</h1>
                <h6>
                  <span className={'label-title'}>Autor(a):</span>
                  <span className={'label-info'}>{this.book.author.name}</span>
                </h6>
                <h6>
                  <span className={'label-title'}>Fecha de publicación:</span>
                  <span className={'label-info'}>{this.publishedAt.day}/{this.publishedAt.month}/{this.publishedAt.year}</span>
                </h6>
                <h6>
                  <span className={'label-title'}>Género:</span>
                  <span className={'label-info'}>{this.book.genre.name}</span>
                </h6>
                <h6>
                  <span className={'label-title'}>Saga:</span>
                  <span className={'label-info'}>{this.book.saga.name}</span>
                </h6>
                <p>{this.book.summary}</p>
              </div>
            </div>
            <Link to="/">
              <button type={'button'} className={'btn'} onClick={this.updateRoute}>
                <FontAwesomeIcon icon="caret-left" /> Volver
              </button>
            </Link>
          </div>
        </div>
      )
    }
    // Si el libro no existe, mostrar mensaje
    else {
      return (
        <div className={'book-page'}>
          <div className={'container'}>
            <p>
              El libro que estás buscando no está en la lista. Tal vez Alicia cambió de opinión...<br/>
              ¯\_(ツ)_/¯
            </p>
            <Link to="/">
              <button type={'button'} className={'btn'} onClick={this.updateRoute}>
                <FontAwesomeIcon icon="caret-left" /> Volver
              </button>
            </Link>
          </div>
        </div>
      )
    }
  }
}

Book.propTypes = {
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
  })
}

const mapStateToProps = state => ({
  data: {
    books: state.data.books
  }
})

const mapDispatchToProps = {
  setBookList:      list  => setBookList(list),
  setPreviousRoute: route => setPreviousRoute(route),
  setCurrentRoute:  route => setCurrentRoute(route)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
