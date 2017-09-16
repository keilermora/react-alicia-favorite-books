import React, { Component } from 'react';
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

    this.book = this.props.books.find(x => x.id === this.props.bookID);
    this.setBookID = this.setBookID.bind(this);
  }

  setBookID(id) {
    return this.props.actions.setBookID(id);
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
            <h4>Fecha de publicación: {this.book.publishedAt.slice(0, 10)}</h4>
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
