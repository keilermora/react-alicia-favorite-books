import React from 'react';
import Particles from 'react-particles-js';
import panda from 'assets/images/panda.svg';
import particles from 'assets/particles/particlesjs-config.json';

// Estilos de Header
import './Header.css';

function Header() {
  return (
    <div id="header-container">
      <Particles id="particles" params={particles} />
      <h1 id="header-title">Libros favoritos de Alicia</h1>
      <img id="img-panda" src={panda} alt="" />
    </div>
  );
}

export default Header;
