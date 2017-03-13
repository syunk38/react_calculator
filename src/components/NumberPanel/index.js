import React, { Component, PropTypes } from 'react'
import { buttonStyle } from './styles'
import { css } from 'glamor'

const NumberButton = ({children, handleClick, handleKeyPress, optionStyle}) => (
  <button className={css(buttonStyle, optionStyle)} onClick={handleClick}>{children}</button>
)

const NumberPanel = ({onAppendNumber}) => {
  return (
    <div>
      <div>
        <NumberButton handleClick={() => { onAppendNumber(7) }}>7</NumberButton>
        <NumberButton handleClick={() => { onAppendNumber(8) }}>8</NumberButton>
        <NumberButton handleClick={() => { onAppendNumber(9) }}>9</NumberButton>
      </div>
      <div>
        <NumberButton handleClick={() => { onAppendNumber(4) }}>4</NumberButton>
        <NumberButton handleClick={() => { onAppendNumber(5) }}>5</NumberButton>
        <NumberButton handleClick={() => { onAppendNumber(6) }}>6</NumberButton>
      </div>
      <div>
        <NumberButton handleClick={() => { onAppendNumber(1) }}>1</NumberButton>
        <NumberButton handleClick={() => { onAppendNumber(2) }}>2</NumberButton>
        <NumberButton handleClick={() => { onAppendNumber(3) }}>3</NumberButton>
      </div>
      <div>
        <NumberButton
          handleClick={() => { onAppendNumber(0) }}
          optionStyle={css({width: '150px'})}>0</NumberButton>
      </div>
    </div>
  )
}

NumberPanel.propTypes = {
  onAppendNumber: React.PropTypes.func
}

export default NumberPanel
