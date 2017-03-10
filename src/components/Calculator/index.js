// library
import React, { Component, PropTypes } from 'react'
// constants
import { NEUTRAL, ADDITION, SUBSTARCTION, MULTIPLICATION, DIVISION } from '../../constants/modes'
// components
import NumberButton from '../NumberButton'
import FunctionalButtons from '../FunctionalButtons'
import Display from '../Display'
/// Util
import funcByMode from './funcByMode'
// Styles
import styles from './styles'

const buildNewValue = (state, value) => {
  if (state.displayValue === "0") {
    return value
  }
  if(state.mode !== NEUTRAL && state.rightValue === 0) {
    return value
  }
  const newValue = `${state.displayValue}${value}`
  if (newValue.length > 10){
    return state.displayValue
  }
  return newValue
}

export default class Calculator extends Component{
  constructor() {
    super()
    this.state = {
      displayValue: "0",
      leftValue: 0,
      rightValue: 0,
      mode: NEUTRAL
    }
    this.appendValue = this.appendValue.bind(this)
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
        <FunctionalButtons
          onClear={() => (this.clearValue())}
          onSetMode={(mode) => (this.setMode(mode))}
          onExecute={() => (this.execute())} />
        <div>
          <div>
            <NumberButton onClick={() => (this.appendValue(1))}>1</NumberButton>
            <NumberButton onClick={() => (this.appendValue(2))}>2</NumberButton>
            <NumberButton onClick={() => (this.appendValue(3))}>3</NumberButton>
          </div>
          <div>
            <NumberButton onClick={() => (this.appendValue(4))}>4</NumberButton>
            <NumberButton onClick={() => (this.appendValue(5))}>5</NumberButton>
            <NumberButton onClick={() => (this.appendValue(6))}>6</NumberButton>
          </div>
          <div>
            <NumberButton onClick={() => (this.appendValue(7))}>7</NumberButton>
            <NumberButton onClick={() => (this.appendValue(8))}>8</NumberButton>
            <NumberButton onClick={() => (this.appendValue(9))}>9</NumberButton>
          </div>
          <div>
            <NumberButton onClick={() => (this.appendValue(0))}>0</NumberButton>
          </div>
        </div>
      </div>
    )
  }
}
