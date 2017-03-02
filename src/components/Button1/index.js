import React, { Component, PropTypes } from 'react'
import styles from './styles'
import ButtonBase from '../ButtonBase'

const addOne = () => {
  console.log('button 1 clicked')
}

const Button1 = () => (
    <ButtonBase displayLetter="1" clickHandler={addOne} />
  )

Button1.propTypes = {
  display_letter: React.PropTypes.string,
  clickHandler: React.PropTypes.func
}

export default Button1
