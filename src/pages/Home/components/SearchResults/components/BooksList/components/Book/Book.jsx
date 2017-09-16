import React, { Component } from 'react';
import { Image, Media } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Estilos del componente Book
import './Book.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.book = this.props.books.find(x => x.id === this.props.id);
    this.setBookID = this.setBookID.bind(this);
  }

  setBookID(id) {
    return this.props.actions.setBookID(id);
  }

  render() {
    if (this.props.viewMode === 'app-view') {
      return (
        <Image
          className="app-view img-book"
          src={this.book.imageUrl}
          onClick={() => this.setBookID(this.book.id)}
        />
      );
    }
    // else if (this.props.viewMode === 'list-view') {
    return (
      <Media className="list-view">
        <Media.Left align="middle">
          <Image className="img-book" src={this.book.imageUrl} />
        </Media.Left>
        <Media.Body>
          <Media.Heading onClick={() => this.setBookID(this.book.id)}>
            {this.book.title}
          </Media.Heading>
          <span className="span-book-author">{this.book.author.name}</span>
        </Media.Body>
      </Media>
    );
  }
}

Book.propTypes = {
  actions: PropTypes.shape({
    setBookID: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  books: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape({
      find: PropTypes.func,
    })),
  ]).isRequired,
  viewMode: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.reducer.get('books'),
    viewMode: state.reducer.get('viewMode'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
