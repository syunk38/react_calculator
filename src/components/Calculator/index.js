import React, { Component, PropTypes } from 'react'
import Button1 from '../Button1'
import styles from './styles'

const Calculator = ({name}) => (
    <div style={styles}>
      {name}を作ります
      <Button1/>
    </div>
  )

Calculator.propTypes = {
  name: React.PropTypes.string
}

export default Calculator
