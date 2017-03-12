import React, { Component, PropTypes } from 'react'
import { buttonStyle } from './styles'
import { css } from 'glamor'

const NumberButton = ({children, onPush, optionStyle}) => (
  <button className={css(buttonStyle, optionStyle)} onClick={onPush}>{children}</button>
)

const NumberPanel = ({onAppendNumber}) => {
  return (
    <div>
      <div>
        <NumberButton onPush={() => { onAppendNumber(7) }}>7</NumberButton>
        <NumberButton onPush={() => { onAppendNumber(8) }}>8</NumberButton>
        <NumberButton onPush={() => { onAppendNumber(9) }}>9</NumberButton>
      </div>
      <div>
        <NumberButton onPush={() => { onAppendNumber(4) }}>4</NumberButton>
        <NumberButton onPush={() => { onAppendNumber(5) }}>5</NumberButton>
        <NumberButton onPush={() => { onAppendNumber(6) }}>6</NumberButton>
      </div>
      <div>
        <NumberButton onPush={() => { onAppendNumber(1) }}>1</NumberButton>
        <NumberButton onPush={() => { onAppendNumber(2) }}>2</NumberButton>
        <NumberButton onPush={() => { onAppendNumber(3) }}>3</NumberButton>
      </div>
      <div>
        <NumberButton onPush={() => { onAppendNumber(0) }} optionStyle={css({width: '150px'})}>0</NumberButton>
      </div>
    </div>
  )
}

NumberPanel.propTypes = {
  onAppendNumber: React.PropTypes.func
}

export default NumberPanel
