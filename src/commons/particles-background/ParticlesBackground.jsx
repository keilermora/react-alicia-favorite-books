import Particles from "react-particles-js";
import particles from '../../assets/particles/particlesjs-config.json';
import styles from "./ParticlesBackground.module.scss";


const ParticlesBackground = () => {
  particles.particles.number.value = window.innerWidth < 768 ? 20 : 40;

  return <>
    <Particles className={styles.particles} params={particles} />
  </>;
}

export default ParticlesBackground;
