import React, { Component, PropTypes } from 'react'

const ModeButton = ({children, onClick}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

ModeButton.propTypes = {
  onClick: React.PropTypes.func
}

export default ModeButton
