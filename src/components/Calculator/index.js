import React, { Component, PropTypes } from 'react'
import styles from './styles'
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

class Calculator extends Component{
  constructor() {
    super()
    this.state = {
      value: "0"
    }
    this.appendValue = this.appendValue.bind(this)
    this.clearValue = this.clearValue.bind(this)
  }
  appendValue(value) {
    this.setState({
      value: buildNewValue(this.state, value)
    })
  }
  clearValue() {
    this.setState({
      value: "0"
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
      </div>
    )
  }
}

Calculator.propTypes = {
  name: React.PropTypes.string
}

export default Calculator
