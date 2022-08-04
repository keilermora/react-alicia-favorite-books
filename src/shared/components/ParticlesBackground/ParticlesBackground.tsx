import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import particles from 'assets/particles.json';
import styles from './ParticlesBackground.module.css';

interface ParticlesBackgroundProps {
  children: React.ReactNode;
}

const ParticlesBackground = ({ children }: ParticlesBackgroundProps): JSX.Element => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions: ISourceOptions = particles;
  return (
    <>
      <Particles className={styles.particles} options={particlesOptions} init={particlesInit} />
      {children}
    </>
  );
};

export default ParticlesBackground;
