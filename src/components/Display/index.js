import React, { Component, PropTypes } from 'react'
import styles from './styles'

const Display = ({children}) => (
  <div className={`${styles}`}>
    {children}
  </div>
)

export default Display
