import React, { Component, PropTypes } from 'react'

const ClearButton = ({children, onClick}) => {
  return (
    <button onClick={() => { onClick() }}>
      {children}
    </button>
  )
}

ClearButton.propTypes = {
  onClick: React.PropTypes.func
}

export default ClearButton
