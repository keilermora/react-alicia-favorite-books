import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, Glyphicon, Grid, Image, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Estilos del componente BookDetails
import './BookDetails.css';

class BookDetails extends Component {
  constructor(props) {
    super(props);

    // Obtener los detalles del libro, según su id
    this.book = this.props.books.find(x => x.id === this.props.bookID);

    // Separar la fecha de publicación del libro, el cual tiene formato yyyy-dd-mm
    this.publishedAt = {
      day: this.book.publishedAt.slice(8, 10),
      month: this.getMonthName(this.book.publishedAt.slice(5, 7)),
      year: this.book.publishedAt.slice(0, 4)
    }

    this.setBookID = this.setBookID.bind(this);
  }

  // Vaciar el id del libro del estado
  setBookID(id) {
    return this.props.actions.setBookID(id);
  }

  // Traducir el mes de la fecha de publicación, el cual viene en números
  getMonthName(month) {
    switch(month) {
      case '01': return 'Enero';
      case '02': return 'Febrero';
      case '03': return 'Marzo';
      case '04': return 'Abril';
      case '05': return 'Mayo';
      case '06': return 'Junio';
      case '07': return 'Julio';
      case '08': return 'Agosto';
      case '09': return 'Septiembre';
      case '10': return 'Octubre';
      case '11': return 'Noviembre';
      default: return 'Diciembre';
    }
  }

  render() {
    return (
      <Grid id="book-details-container">
        <Row>
          <Col xs={12} sm={3} className="book-details-col">
            <Image responsive src={this.book.imageUrl} />
          </Col>
          <Col xs={12} sm={9} className="book-details-col">
            <h1>{this.book.title}</h1>
            <h4>Autor(a): {this.book.author.name}</h4>
            <h4>Fecha de publicación: {this.publishedAt.day} de {this.publishedAt.month} del {this.publishedAt.year}</h4>
            <h4>Género: {this.book.genre.name}</h4>
            <p>
              {this.book.summary}
            </p>
            <Button onClick={() => this.setBookID('')}>
              <Glyphicon glyph="menu-left" /> Volver
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

BookDetails.propTypes = {
  actions: PropTypes.shape({
    setBookID: PropTypes.func,
  }).isRequired,
  bookID: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      find: PropTypes.func,
    })).isRequired,
};

function mapStateToProps(state) {
  return {
    bookID: state.reducer.get('bookID'),
    books: state.reducer.get('books'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
