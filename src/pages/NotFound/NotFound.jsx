import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Estilos
import './NotFound.css';

const NotFound = () => (
  <div className="not-found-page">
    <div className="container">
      <h5>¿Querías ver una página diferente?</h5>
      <h3>¡Aquí la tienes!</h3>
      <Link to="/">
        <button type="button" className="btn">
          <FontAwesomeIcon icon="caret-left" />
          {' '}
          Volver
        </button>
      </Link>
    </div>
  </div>
);

export default NotFound;
