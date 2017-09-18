import React, { Component } from 'react';
import { Button, Col, Form, FormControl, FormGroup, Glyphicon, Grid, InputGroup, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Acciones para actualizar el estado de la app
import actions from 'redux/actions';

// Estilos de Filter
import './Filter.css';


class Filter extends Component {
  constructor(props) {
    super(props);

    this.toggleListView = this.toggleListView.bind(this);
    this.toggleAppView = this.toggleAppView.bind(this);
    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateFilterType = this.updateFilterType.bind(this);
  }

  // Cambiar a la vista tipo aplicación
  toggleAppView(e) {
    e.preventDefault();
    return this.props.actions.setView('app-view');
  }

  // Cambiar a la vista tipo lista
  toggleListView(e) {
    e.preventDefault();
    return this.props.actions.setView('list-view');
  }

  // Actualizar el texto del filtro
  updateFilterText(e) {
    e.preventDefault();
    return this.props.actions.setFilterText(e.target.value);
  }

  // Actualizar el tipo de filtro
  updateFilterType(e) {
    return this.props.actions.setFilterType(e.target.value);
  }

  render() {
    return (
      <Form id="filter-container" inline>
        <Grid>
          <Row>
            <Col xs={6} sm={2} smOffset={2} md={1} mdOffset={2}>
              <FormGroup>
                <Button onClick={this.toggleAppView} active={this.props.viewMode === 'app-view'}>
                  <Glyphicon glyph="th" />
                </Button>
              </FormGroup>
            </Col>
            <Col xs={6} sm={2} md={1}>
              <FormGroup>
                <Button onClick={this.toggleListView} active={this.props.viewMode === 'list-view'}>
                  <Glyphicon glyph="th-list" />
                </Button>
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={2}>
              <FormGroup>
                <FormControl
                  componentClass="select"
                  defaultValue={this.props.filterType}
                  onChange={this.updateFilterType}
                >
                  <option value="title">Título </option>
                  <option value="author">Autor </option>
                  <option value="gender">Género </option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="search" />
                  </InputGroup.Addon>
                  <FormControl
                    onChange={this.updateFilterText}
                    value={this.props.filterText}
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Form>
    );
  }
}

Filter.propTypes = {
  actions: PropTypes.shape({
    setView: PropTypes.func,
    setFilterText: PropTypes.func,
    setFilterType: PropTypes.func,
  }).isRequired,
  viewMode: PropTypes.string.isRequired,
  filterText: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    viewMode: state.reducer.get('viewMode'),
    filterText: state.reducer.get('filterText'),
    filterType: state.reducer.get('filterType'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
