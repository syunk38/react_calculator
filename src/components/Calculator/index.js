import React, { Component, PropTypes } from 'react'
import styles from './styles'
import ButtonNumber from '../ButtonNumber'
import Display from '../Display'

class Calculator extends Component{
  constructor() {
    super()
    this.state = {
      value: "0"
    }
    this.addValue = this.addValue.bind(this)
  }
  addValue(value) {
    const newValue = `${this.state.value}${value}`
    if (newValue.length > 10){
      return
    }
    this.setState({
      value: newValue
    })
  }
  render() {
    return (
        <div style={styles}>
          <Display display={this.state.value}/>
          <div>
            <ButtonNumber displayNumber="1" onClickHandler={this.addValue}/>
            <ButtonNumber displayNumber="2" onClickHandler={this.addValue}/>
            <ButtonNumber displayNumber="3" onClickHandler={this.addValue}/>
          </div>
          <div>
            <ButtonNumber displayNumber="4" onClickHandler={this.addValue}/>
            <ButtonNumber displayNumber="5" onClickHandler={this.addValue}/>
            <ButtonNumber displayNumber="6" onClickHandler={this.addValue}/>
          </div>
          <div>
            <ButtonNumber displayNumber="7" onClickHandler={this.addValue}/>
            <ButtonNumber displayNumber="8" onClickHandler={this.addValue}/>
            <ButtonNumber displayNumber="9" onClickHandler={this.addValue}/>
          </div>
          <div>
            <ButtonNumber displayNumber="0" onClickHandler={this.addValue}/>
          </div>
        </div>
      )
  }
}

Calculator.propTypes = {
  name: React.PropTypes.string
}

export default Calculator
