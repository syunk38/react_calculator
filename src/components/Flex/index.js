import React, { Component, PropTypes } from 'react'
import { css } from 'glamor'

export default ({children}) => (
  <div className={css({display: 'flex'})}>
    {children[0]}
    {children[1]}
  </div>
)
