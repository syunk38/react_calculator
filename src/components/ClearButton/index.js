import React, { Component, PropTypes } from 'react'

const ClearButton = ({children, onClickHandler}) => {
  return (
    <button onClick={() => { onClickHandler() }}>
      {children}
    </button>
  )
}

ClearButton.propTypes = {
  onClickHandler: React.PropTypes.func
}

export default ClearButton
