import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Estilos del componente Book
import './Author.css';

class Author extends Component {
  constructor(props) {
    super(props);

    this.setFilterText = this.setFilterText.bind(this);
  }

  setFilterText(author) {
    return this.props.actions.setFilterText(author);
  }

  render() {
    return (
      <Button className="btn-author" onClick={() => this.setFilterText(this.props.author)}>
        {this.props.author}
      </Button>
    );
  }
}

Author.propTypes = {
  actions: PropTypes.shape({
    setFilterText: PropTypes.func,
  }).isRequired,
  author: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    viewMode: state.reducer.get('viewMode'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);
