import React, { Component, PropTypes } from 'react'
import styles from './styles'

const Display = ({display}) => (
  <div>
    {display}
  </div>
)

Display.propTypes = {
  display: React.PropTypes.string
}

export default Display
