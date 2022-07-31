import React from 'react';
import Particles from 'react-tsparticles';
import styles from './ParticlesBackground.module.css';
import particles from '../../assets/particles.json';

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
