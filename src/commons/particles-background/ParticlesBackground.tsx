import { FC, ReactElement } from 'react';
import Particles, { ISourceOptions } from 'react-tsparticles';
import styles from './ParticlesBackground.module.css';
import particles from '../../assets/particles.json';

const ParticlesBackground: FC = ({ children }): ReactElement => {
  const particlesOptions: ISourceOptions = particles;
  return (
    <>
      <Particles className={styles.particles} options={particlesOptions} />
      {children}
    </>
  );
};

export default ParticlesBackground;
