import React, { Component } from 'react';
import Particles from 'react-particles-js';

// Recursos
import particles from '../../assets/particles/particlesjs-config.json';

// Estilos
import './ParticlesBackground.css';

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);

    this.isMobile = window.innerWidth < 768;
    particles.particles.number.value = this.isMobile ? 20 : 40;
  }

  render() {
    return (
      <Particles className="particles" params={particles} />
    );
  }
}

export default ParticlesBackground;
