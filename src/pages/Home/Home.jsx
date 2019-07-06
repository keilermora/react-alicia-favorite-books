import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Componentes
import Title from './components/Title/Title';
import Filter from './components/Filter/Filter';

import SearchResults from './components/SearchResults/SearchResults';
// Acciones para actualizar el estado de la app
import { setCurrentRoute } from '../../redux/actions';

class Home extends Component {
  componentWillMount() {
    this.props.setCurrentRoute('Home');
  }

  /**
   * Si el usuario ha estado antes en la página para visualizar la información
   * de un libro, entonces el scroll debe ubicarse en la búsqueda de libros y
   * no al inicio de la página.
   */
  componentDidMount() {
    const { route } = this.props;
    if (route.previous === 'Book') {
      const node = ReactDOM.findDOMNode(this.refs.searchLayout);
      node.scrollIntoView({ block: 'start' });
    }
  }

  render() {
    return (
      <main>
        <Title />
        <Filter ref="searchLayout" />
        <SearchResults />
      </main>
    );
  }
}

Home.propTypes = {
  route: PropTypes.shape({
    previous: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  route: {
    previous: state.route.previous,
  },
});

const mapDispatchToProps = {
  setCurrentRoute: route => setCurrentRoute(route),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
