import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Componentes
import Hyperlink from '../../commons/Hyperlink/Hyperlink';

// Acciones para actualizar el estado de la app
import { setPreviousRoute, setCurrentRoute } from '../../redux/actions';

// Estilos
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.updateRoute = this.updateRoute.bind(this);
  }

  componentWillMount() {
    this.props.setCurrentRoute('About');
  }

  /**
   * Si el usuario cambia la vista, actualizar
   */
  updateRoute() {
    this.props.setPreviousRoute('About');
  }

  /**
   * Manejar el evento cuando en el DOM se muestre el waypoint
   * @param {*} waypoint
   */
  handleWaypointEnter(waypoint) {
    document.getElementById(`line-${waypoint}`).style.opacity = '0.8';
  }

  /**
   * Manejar el evento cuando en el DOM se oculte el waypoint
   * @param {*} waypoint
   */
  handleWaypointLeave(waypoint) {
    document.getElementById(`line-${waypoint}`).style.opacity = '0.1';
  }

  render() {
    return (
      <main className="about-page">
        <div className="container">
          <h1>Alice&#39;s Favorite Books</h1>
          <p>
            Sitio web elaborado por
            {' '}
            <Hyperlink href="http://keilermora.dualemento.com">Keiler Mora</Hyperlink>
            {' '}
            con fines demostrativos. El proyecto fue desarrollado usando las librerías de JavaScript
            {' '}
            <Hyperlink href="https://reactjs.org/">React</Hyperlink>
            {' '}
            y
            {' '}
            <Hyperlink href="https://redux.js.org/.org/">Redux</Hyperlink>
            {' '}
            para crear la interfaz de usuario, en comunicación con la base de datos alojada en
            {' '}
            <Hyperlink href="https://www.graph.cool/">Graphcool</Hyperlink>
            .
            <br />
            <br />
            El código fuente está disponible en
            {' '}
            <Hyperlink href="https://github.com/keilermora/alicias-favorite-books">Github</Hyperlink>
            .
          </p>
          <Link to="/">
            <button type="button" className="btn" onClick={this.updateRoute}>
              <FontAwesomeIcon icon="caret-left" />
              {' '}
              Volver
            </button>
          </Link>
        </div>
        <div className="container">
          <Waypoint bottomOffset="30%" onEnter={this.handleWaypointEnter.bind(this, 1)} onLeave={this.handleWaypointLeave.bind(this, 1)}>
            <h3 id="line-1">- I&#39;ll be here...</h3>
          </Waypoint>
          <Waypoint bottomOffset="30%" onEnter={this.handleWaypointEnter.bind(this, 2)} onLeave={this.handleWaypointLeave.bind(this, 2)}>
            <h3 id="line-2">- Why..?</h3>
          </Waypoint>
          <Waypoint bottomOffset="30%" onEnter={this.handleWaypointEnter.bind(this, 3)} onLeave={this.handleWaypointLeave.bind(this, 3)}>
            <h3 id="line-3">- I&#39;ll be &#39;waiting&#39; here...</h3>
          </Waypoint>
          <Waypoint bottomOffset="30%" onEnter={this.handleWaypointEnter.bind(this, 4)} onLeave={this.handleWaypointLeave.bind(this, 4)}>
            <h3 id="line-4">- For what?</h3>
          </Waypoint>
          <Waypoint bottomOffset="30%" onEnter={this.handleWaypointEnter.bind(this, 5)} onLeave={this.handleWaypointLeave.bind(this, 5)}>
            <h3 id="line-5">
              - I&#39;ll be waiting... for you... so...
              <br />
              if you come here...
              <br />
              you&#39;ll find me.
              <br />
              I promise.
            </h3>
          </Waypoint>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = {
  setPreviousRoute: route => setPreviousRoute(route),
  setCurrentRoute: route => setCurrentRoute(route),
};

export default connect(null, mapDispatchToProps)(About);
