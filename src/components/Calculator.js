import React, { Component, PropTypes } from 'react'

const Calculator = ({name}) => (
    <div>
      {name}を作ります
    </div>
  )

Calculator.propTypes = {
  name: PropTypes.bool.string
}

export default Calculator
