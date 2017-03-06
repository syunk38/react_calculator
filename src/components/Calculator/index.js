// library
import React, { Component, PropTypes } from 'react'
import styles from './styles'

// constants
import { NEUTRAL, ADDITION } from '../../constants/modes'

// components
import NumberButton from '../NumberButton'
import ClearButton from '../ClearButton'
import Display from '../Display'

const buildNewValue = (state, value) => {
  if (state.value === "0"){
    return value
  }
  const newValue = `${state.value}${value}`
  if (newValue.length > 10){
    return state.value
  }
  return newValue
}

export default class Calculator extends Component{
  constructor() {
    super()
    this.state = {
      value: "0",
      mode: NEUTRAL
    }
    this.appendValue = this.appendValue.bind(this)
    this.clearValue = this.clearValue.bind(this)
    this.setModeAddition = this.setModeAddition.bind(this)
  }
  appendValue(value) {
    this.setState({
      ...this.state,
      value: buildNewValue(this.state, value)
    })
  }
  clearValue() {
    this.setState({
      ...this.state,
      value: "0",
      mode: NEUTRAL
    })
  }
  setModeAddition() {
    this.setState({
      ...this.state,
      mode: ADDITION
    })
  }
  render() {
    return (
      <div style={styles}>
        <Display display={this.state.value}/>
        <div>
          <ClearButton onClickHandler={this.clearValue}>clear</ClearButton>
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
