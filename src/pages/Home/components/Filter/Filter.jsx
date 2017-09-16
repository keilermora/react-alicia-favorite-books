import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';
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

  toggleAppView(e) {
    e.preventDefault();
    return this.props.actions.setView('app-view');
  }

  toggleListView(e) {
    e.preventDefault();
    return this.props.actions.setView('list-view');
  }

  updateFilterText(e) {
    e.preventDefault();
    return this.props.actions.setFilterText(e.target.value);
  }

  updateFilterType(e) {
    return this.props.actions.setFilterType(e.target.value);
  }

  render() {
    return (
      <Form id="filter-container" inline>
        <FormGroup>
          <Button onClick={this.toggleAppView} active={this.props.viewMode === 'app-view'}>
            <Glyphicon glyph="th" />
          </Button>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.toggleListView} active={this.props.viewMode === 'list-view'}>
            <Glyphicon glyph="th-list" />
          </Button>
        </FormGroup>
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
