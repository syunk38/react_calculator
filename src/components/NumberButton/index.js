import React, { Component, PropTypes } from 'react'
import styles from './styles'

const NumberButton = ({children, onClickHandler}) => {
  return (
    <button style={styles} onClick={() => { onClickHandler(children) }}>
      {children}
    </button>
  )
}

NumberButton.propTypes = {
  onClickHandler: React.PropTypes.func
}

export default NumberButton
