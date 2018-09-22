import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Estilos
import './Book.css'

// Acciones para actualizar el estado de la app
import { setPreviousRoute } from '../../../../../../redux/actions'

class Book extends Component {
  constructor(props) {
    super(props);
    this.book = this.props.data.books.find(x => x.id === this.props.id);
    this.updateRoute = this.updateRoute.bind(this) 
  }
  /**
   * Si el usuario cambia la vista, actualizar
   */
  updateRoute() {
    this.props.setPreviousRoute('Home')
  }

  render() {
    return (
      <Link to={'/book/' + this.book.id}>
        <img
          className={'book'}
          src={this.book.imageUrl}
          onClick={this.updateRoute}
          alt={this.book.name}
          width={226}
          height={350}/>
      </Link>
    )
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
  setPreviousRoute: route => setPreviousRoute(route)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
