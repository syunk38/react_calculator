import React, { Component, PropTypes } from 'react'
import { buttonStyle } from './styles'
import { css } from 'glamor'

const NumberButton = ({children, onAppendNumber, optionStyle}) => (
  <button className={css(buttonStyle, optionStyle)} onClick={() => (onAppendNumber(children))}>{children}</button>
)

const NumberPanel = ({onAppendNumber}) => {
  return (
    <div>
      <div>
        <NumberButton onAppendNumber={onAppendNumber}>7</NumberButton>
        <NumberButton onAppendNumber={onAppendNumber}>8</NumberButton>
        <NumberButton onAppendNumber={onAppendNumber}>9</NumberButton>
      </div>
      <div>
        <NumberButton onAppendNumber={onAppendNumber}>4</NumberButton>
        <NumberButton onAppendNumber={onAppendNumber}>5</NumberButton>
        <NumberButton onAppendNumber={onAppendNumber}>6</NumberButton>
      </div>
      <div>
        <NumberButton onAppendNumber={onAppendNumber}>1</NumberButton>
        <NumberButton onAppendNumber={onAppendNumber}>2</NumberButton>
        <NumberButton onAppendNumber={onAppendNumber}>3</NumberButton>
      </div>
      <div>
        <NumberButton onAppendNumber={onAppendNumber} optionStyle={css({width: '150px'})}>0</NumberButton>
      </div>
    </div>
  )
}

NumberPanel.propTypes = {
  onAppendNumber: React.PropTypes.func
}

export default NumberPanel
