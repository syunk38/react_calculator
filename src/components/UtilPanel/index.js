import React, { Component, PropTypes } from 'react'
import styles from './styles'

const UtilButton = ({children, onPush}) => (
  <button className={`${styles}`} onClick={onPush}>{children}</button>
)

const UtilPanel = ({onClear}) => {
  return (
    <div>
      <UtilButton onPush={onClear}>AC</UtilButton>
    </div>
  )
}

UtilPanel.propTypes = {
  onClear: React.PropTypes.func
}

export default UtilPanel
