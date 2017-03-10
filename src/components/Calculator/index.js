// library
import React, { Component, PropTypes } from 'react'
// constants
import { NEUTRAL } from '../../constants/modes'
// components
import NumberPanel from '../NumberPanel'
import FunctionPanel from '../FunctionPanel'
import Display from '../Display'
/// Util
import funcByMode from './funcByMode'
import buildNewValue from './buildNewValue'
// Styles
import styles from './styles'

export default class Calculator extends Component{
  constructor() {
    super()
    this.state = {
      displayValue: "0",
      leftValue: 0,
      rightValue: 0,
      mode: NEUTRAL
    }
  }
  appendValue(value) {
    const newValue = buildNewValue(this.state, value)
    this.setState({
      ...this.state,
      displayValue: newValue,
      rightValue: parseInt(newValue)
    })
  }
  clearValue() {
    this.setState({
      ...this.state,
      displayValue: "0",
      rightValue: 0,
      leftValue: 0,
      mode: NEUTRAL
    })
  }
  setMode(mode) {
    this.setState({
      ...this.state,
      rightValue: 0,
      leftValue: parseInt(this.state.displayValue),
      mode: mode
    })
  }
  execute() {
    const func = funcByMode(this.state.mode)
    const result = func(this.state.leftValue, this.state.rightValue)
    if (Number.isNaN(result)) {
      this.setState({
        ...this.state,
        displayValue: 'Err'
      })
      return;
    }
    this.setState({
      ...this.state,
      displayValue: result.toString(),
      leftValue: result
    })
  }
  render() {
    return (
      <div className={`${styles}`}>
        <Display>{this.state.displayValue}</Display>
        <FunctionPanel
          onClear={() => (this.clearValue())}
          onSetMode={(mode) => (this.setMode(mode))}
          onExecute={() => (this.execute())} />
        <NumberPanel onAppendValue={(number) => {this.appendValue(number)}}/>
      </div>
    )
  }
}
