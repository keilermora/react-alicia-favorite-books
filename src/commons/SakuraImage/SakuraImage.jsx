import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Recursos
import sakuraSrc from '../../assets/images/sakura.png'

// Estilos
import './SakuraImage.css'

class SakuraImage extends Component {
  constructor() {
    super()

    // El listener del scroll dependerá de si el tamaño de la pantalla es pequeña
    this.isMobile = window.innerWidth < 768
    
    this.updateOpacity = this.updateOpacity.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  /**
   * La opacidad de la sakura dependerá de la ruta de la aplicación,
   * además de si el tamaño de la pantalla es pequeña
   */
  updateOpacity() {
    if(!this.isMobile && this.props.route.current !== 'About') {
      ReactDOM.findDOMNode(this.refs.sakura).style.opacity = 0.6
      window.addEventListener('scroll', this.handleScroll)
    }
    else {
      ReactDOM.findDOMNode(this.refs.sakura).style.opacity = 0.1
    }
  }
  /**
   * Si el scroll no se encuentra en la parte superior del sitio web, la imagen de la sakura será menos opaca,
   * éste evento sólo aplica para todas las rutas en pantallas grandes, excepto 'Acerca De'
   */
  handleScroll() {
    ReactDOM.findDOMNode(this.refs.sakura).style.opacity = 
    (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) ? 0.1 : 0.6
  }

  componentDidMount() {
    this.updateOpacity()
  }
  /**
   * Actualizar el componente sólo si el usuario viene o va a la ruta 'Acerca De'.
   */
  shouldComponentUpdate(nextProps) {
    if(nextProps.route.current === 'About' || this.props.route.current === 'About') {
      return true
    }
    else {
      return false
    }
  }
  /**
   * Si el componente se actualiza, se debe verificar nuevamente la ruta y actualizar la opacidad
   */
  componentDidUpdate() {
    window.removeEventListener('scroll', this.handleScroll)
    this.updateOpacity()
  }

  render() {
    return (
      <img ref={'sakura'} className={'sakura'} src={sakuraSrc} alt={''} />
    )
  }
}

SakuraImage.propTypes = {
  route: PropTypes.shape({
    current: PropTypes.string
  })
}

const mapStateToProps = state => ({
  route: {
    current: state.route.current
  }
})

export default connect(mapStateToProps)(SakuraImage)
