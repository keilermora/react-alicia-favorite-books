import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Componentes
import Title from './components/Title/Title';
import Filter from './components/Filter/Filter';
import SearchResults from './components/SearchResults/SearchResults';

// Acciones para actualizar el estado de la app
import { setCurrentRoute } from '../../redux/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.filterSectionRef = React.createRef();
  }

  /**
   * Si el usuario ha estado antes en la página para visualizar la información
   * de un libro, entonces el scroll debe ubicarse en la búsqueda de libros y
   * no al inicio de la página.
   */
  componentDidMount() {
    setCurrentRoute('Home');
    const { route } = this.props;
    if (route.previous === 'Book') {
      this.filterSectionRef.current.scrollIntoView({ block: 'start' });
    }
  }

  render() {
    return (
      <main>
        <section>
          <Title />
        </section>
        <section ref={this.filterSectionRef}>
          <Filter />
        </section>
        <section>
          <SearchResults />
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  route: PropTypes.shape({
    previous: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  route: {
    previous: state.route.previous,
  },
});

const mapDispatchToProps = {
  setCurrentRoute: (route) => setCurrentRoute(route),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
