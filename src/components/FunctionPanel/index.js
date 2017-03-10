import React, { Component, PropTypes } from 'react'
import styles from './styles'
import { NEUTRAL, ADDITION, SUBSTARCTION, MULTIPLICATION, DIVISION } from '../../constants/modes'

const FunctionPanel = ({children, onClear, onSetMode, onExecute}) => {
  return (
    <div>
      <button className={`${styles}`} onClick={() => (onClear())}>clear</button>
      <button className={`${styles}`} onClick={() => (onSetMode(ADDITION))}>+</button>
      <button className={`${styles}`} onClick={() => (onSetMode(SUBSTARCTION))}>-</button>
      <button className={`${styles}`} onClick={() => (onSetMode(MULTIPLICATION))}>×</button>
      <button className={`${styles}`} onClick={() => (onSetMode(DIVISION))}>÷</button>
      <button className={`${styles}`} onClick={() => (onExecute()) }>=</button>
    </div>
  )
}

FunctionPanel.propTypes = {
  onClick: React.PropTypes.func
}



export default FunctionPanel
