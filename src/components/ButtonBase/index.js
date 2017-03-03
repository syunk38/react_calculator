import React, { Component, PropTypes } from 'react'
import styles from './styles'

const ButtonBase = ({displayLetter, clickHandler}) => (
    <button style={styles} onClick={clickHandler}>
      {displayLetter}
    </button>
  )

ButtonBase.propTypes = {
  displayLetter: React.PropTypes.string,
  clickHandler: React.PropTypes.func
}

export default ButtonBase
