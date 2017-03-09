// library
import React, { Component, PropTypes } from 'react'
// constants
import { NEUTRAL, ADDITION, SUBSTARCTION, MULTIPLICATION, DIVISION } from '../../constants/modes'
// components
import NumberButton from '../NumberButton'
import ClearButton from '../ClearButton'
import ModeButton from '../ModeButton'
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
    this.clearValue = this.clearValue.bind(this)
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
    this.setState({
      displayValue: result.toString(),
      leftValue: result,
      rightValue: 0,
      mode: NEUTRAL
    })
  }
  render() {
    return (
      <div className={`${styles}`}>
        <Display>{this.state.displayValue}</Display>
        <div>
          <ClearButton onClickHandler={this.clearValue}>clear</ClearButton>
          <ModeButton onClick={() => (this.setMode(ADDITION))}>+</ModeButton>
          <ModeButton onClick={() => (this.setMode(SUBSTARCTION))}>-</ModeButton>
          <ModeButton onClick={() => (this.setMode(MULTIPLICATION))}>×</ModeButton>
          <ModeButton onClick={() => (this.setMode(DIVISION))}>÷</ModeButton>
          <ModeButton onClick={() => (this.execute()) }>=</ModeButton>
        </div>
        <div>
          <NumberButton onClickHandler={this.appendValue}>1</NumberButton>
          <NumberButton onClickHandler={this.appendValue}>2</NumberButton>
          <NumberButton onClickHandler={this.appendValue}>3</NumberButton>
        </div>
        <div>
          <NumberButton onClickHandler={this.appendValue}>4</NumberButton>
          <NumberButton onClickHandler={this.appendValue}>5</NumberButton>
          <NumberButton onClickHandler={this.appendValue}>6</NumberButton>
        </div>
        <div>
          <NumberButton onClickHandler={this.appendValue}>7</NumberButton>
          <NumberButton onClickHandler={this.appendValue}>8</NumberButton>
          <NumberButton onClickHandler={this.appendValue}>9</NumberButton>
        </div>
        <div>
          <NumberButton onClickHandler={this.appendValue}>0</NumberButton>
        </div>
        <div>mode: {this.state.mode}</div>
      </div>
    )
  }
}
