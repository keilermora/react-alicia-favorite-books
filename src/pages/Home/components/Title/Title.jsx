import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import panda from '../../../../assets/images/panda.svg';

// Estilos
import './Title.css';

// Acciones para actualizar el estado de la app
import { setPreviousRoute } from '../../../../redux/actions';

class Title extends Component {
  constructor(props) {
    super(props);
    this.updateRoute = this.updateRoute.bind(this);
  }

  /**
   * Si el usuario cambia la vista, actualizar
   */
  updateRoute() {
    this.props.setPreviousRoute('Home');
  }

  render() {
    return (
      <div className="title-component">
        <Link to="/about" onClick={this.updateRoute}>Acerca de...</Link>
        <h1>Libros favoritos de Alicia</h1>
        <img src={panda} width="128" height="120" alt="" />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setPreviousRoute: route => setPreviousRoute(route),
};

export default connect(null, mapDispatchToProps)(Title);
