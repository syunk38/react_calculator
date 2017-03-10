import React, { Component, PropTypes } from 'react'
import styles from './styles'

const NumberPanel = ({children, onAppendNumber}) => {
  return (
    <div>
      <div>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(1))}>1</button>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(2))}>2</button>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(3))}>3</button>
      </div>
      <div>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(4))}>4</button>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(5))}>5</button>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(6))}>6</button>
      </div>
      <div>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(7))}>7</button>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(8))}>8</button>
        <button className={`${styles}`} onClick={() => (this.onAppendNumber(9))}>9</button>
      </div>
      <div>
        <button className={`${styles}`} onClick={() => (this.appendValue(0))}>0</button>
      </div>
    </div>
  )
}

NumberPanel.propTypes = {
  onAppendNumber: React.PropTypes.func
}

export default NumberPanel
