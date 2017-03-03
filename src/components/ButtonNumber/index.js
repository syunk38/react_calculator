import React, { Component, PropTypes } from 'react'
import styles from './styles'
import ButtonBase from '../ButtonBase'

const ButtonNumber = ({displayNumber, onClickHandler}) => {
  const add = () => {
    onClickHandler(displayNumber)
  }

  return (
    <button style={styles} onClick={add}>
      {displayNumber}
    </button>
  )
}

ButtonNumber.propTypes = {
  displayNumber: React.PropTypes.string,
  onClickHandler: React.PropTypes.func
}

export default ButtonNumber
