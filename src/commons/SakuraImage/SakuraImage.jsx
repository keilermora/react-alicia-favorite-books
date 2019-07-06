import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Recursos
import sakuraSrc from '../../assets/images/sakura.png';

// Estilos
import './SakuraImage.css';

class SakuraImage extends Component {
  constructor(props) {
    super(props);

    // El listener del scroll dependerá de si el tamaño de la pantalla es pequeña
    this.isMobile = window.innerWidth < 768;

    this.updateOpacity = this.updateOpacity.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.updateOpacity();
  }

  /**
   * Actualizar el componente sólo si el usuario viene o va a la ruta 'Acerca De'.
   */
  shouldComponentUpdate(nextProps) {
    const { route } = this.props;
    return nextProps.route.current === 'About' || route.current === 'About';
  }

  /**
   * Si el componente se actualiza, se debe verificar nuevamente la ruta y actualizar la opacidad
   */
  componentDidUpdate() {
    window.removeEventListener('scroll', this.handleScroll);
    this.updateOpacity();
  }

  /**
   * La opacidad de la sakura dependerá de la ruta de la aplicación,
   * además de si el tamaño de la pantalla es pequeña
   */
  updateOpacity() {
    const { route } = this.props;
    if (!this.isMobile && route.current !== 'About') {
      this.sakuraImgNode.style.opacity = '0.6';
      window.addEventListener('scroll', this.handleScroll);
    } else {
      this.sakuraImgNode.style.opacity = '0.1';
    }
  }

  /**
   * Si el scroll no se encuentra en la parte superior del sitio web, la imagen de la sakura será
   * menos opaca, éste evento sólo aplica para todas las rutas en pantallas grandes,
   * excepto 'Acerca De'
   */
  handleScroll() {
    this.sakuraImgNode.style.opacity = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop) ? '0.1' : '0.6';
  }

  render() {
    return (
      <img ref={(node) => { this.sakuraImgNode = node; }} className="sakura" src={sakuraSrc} alt="" />
    );
  }
}

SakuraImage.propTypes = {
  route: PropTypes.shape({
    current: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  route: {
    current: state.route.current,
  },
});

export default connect(mapStateToProps)(SakuraImage);
