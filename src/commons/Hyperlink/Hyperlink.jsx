import React from 'react'
import PropTypes from 'prop-types'

import './Hyperlink.css'

function Hyperlink(props) {
  return (
    <a className={'hyperlink'} href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

Hyperlink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string
}

export default Hyperlink
