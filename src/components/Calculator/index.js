import React, { Component, PropTypes } from 'react'
import ButtonNumber from '../ButtonNumber'
import styles from './styles'

const Calculator = ({name}) => (
    <div style={styles}>
      {name}を作ります
      <div>
        <ButtonNumber displayNumber="1"/>
        <ButtonNumber displayNumber="2"/>
        <ButtonNumber displayNumber="3"/>
      </div>
      <div>
        <ButtonNumber displayNumber="4"/>
        <ButtonNumber displayNumber="5"/>
        <ButtonNumber displayNumber="6"/>
      </div>
      <div>
        <ButtonNumber displayNumber="7"/>
        <ButtonNumber displayNumber="8"/>
        <ButtonNumber displayNumber="9"/>
      </div>
        <ButtonNumber displayNumber="0"/>
    </div>
  )

Calculator.propTypes = {
  name: React.PropTypes.string
}

export default Calculator
