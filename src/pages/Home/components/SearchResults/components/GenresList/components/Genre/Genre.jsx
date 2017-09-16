import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Estilos del componente Book
import './Genre.css';

class Genre extends Component {
  constructor(props) {
    super(props);

    this.setFilterText = this.setFilterText.bind(this);
  }

  setFilterText(genre) {
    return this.props.actions.setFilterText(genre);
  }

  render() {
    return (
      <Button className="btn-author" onClick={() => this.setFilterText(this.props.genre)}>
        {this.props.genre}
      </Button>
    );
  }
}

Genre.propTypes = {
  actions: PropTypes.shape({
    setFilterText: PropTypes.func,
  }).isRequired,
  genre: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
