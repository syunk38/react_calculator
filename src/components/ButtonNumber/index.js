import React, { Component, PropTypes } from 'react'
import styles from './styles'
import ButtonBase from '../ButtonBase'

const ButtonNumber = ({displayNumber}) => {
  const add = () => {
    console.log(displayNumber)
    // console.log(`button ${this.props.number} clicked`)
  }

  return (<ButtonBase displayLetter={displayNumber} clickHandler={add} />)
}


ButtonNumber.propTypes = {
  displayNumber: React.PropTypes.string
}

export default ButtonNumber
