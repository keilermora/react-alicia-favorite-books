import React from 'react';
import Particles from 'react-tsparticles';

import particles from 'assets/particles.json';

import styles from './ParticlesBackground.module.css';

interface ParticlesBackgroundProps {
  children: React.ReactNode;
}

const ParticlesBackground = ({ children }: ParticlesBackgroundProps): JSX.Element => {
  const particlesOptions = particles;
  return (
    <>
      <Particles className={styles.particles} options={particlesOptions} />
      {children}
    </>
  );
};

export default ParticlesBackground;
