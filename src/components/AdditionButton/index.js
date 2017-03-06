import React, { Component, PropTypes } from 'react'

const AdditionButton = ({children, onClickHandler}) => {
  return (
    <button onClick={() => { onClickHandler() }}>
      {children}
    </button>
  )
}

AdditionButton.propTypes = {
  onClickHandler: React.PropTypes.func
}

export default AdditionButton
