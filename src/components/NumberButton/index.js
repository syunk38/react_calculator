import React, { Component, PropTypes } from 'react'
import styles from './styles'

const NumberButton = ({children, onClick}) => {
  return (
    <button className={`${styles}`} onClick={() => { onClick() }}>
      {children}
    </button>
  )
}

NumberButton.propTypes = {
  onClick: React.PropTypes.func
}

export default NumberButton
