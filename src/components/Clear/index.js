import React, { Component, PropTypes } from 'react'
import styles from './styles'

const NumberButton = ({children, onClickHandler}) => {
  const add = () => {
    onClickHandler(children)
  }

  return (
    <button style={styles} onClick={add}>
      {children}
    </button>
  )
}

NumberButton.propTypes = {
  onClickHandler: React.PropTypes.func
}

export default NumberButton
