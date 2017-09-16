import React from 'react';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Estilos de Home
import './Home.css';
import sakura from 'assets/images/sakura.png';

// Componentes de Home

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import BookDetails from './components/BookDetails/BookDetails';
import SearchResults from './components/SearchResults/SearchResults';

function Home(props) {
  return (
    <main id="main-home">
      <img id="img-sakura" src={sakura} alt="" />
      <Header />
      <Grid id="results-layout" fluid>
        {props.bookID !== '' ?
          <Row>
            <Col xs={12}>
              <BookDetails />
            </Col>
          </Row>
          :
          <Row>
            <Col xs={12} id="filter-layout">
              <Filter />
            </Col>
            <Col xs={12} id="search-results-layout">
              <SearchResults />
            </Col>
          </Row>
        }
      </Grid>
    </main>
  );
}

Home.propTypes = {
  bookID: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    bookID: state.reducer.get('bookID'),
  };
}

export default connect(mapStateToProps)(Home);
