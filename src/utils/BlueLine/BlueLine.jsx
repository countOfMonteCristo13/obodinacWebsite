import React from 'react'
import './blueLine.css'

const BlueLine = ({isHidden = false}) => {
  return (
    <div className={`blueline-wrapper ${isHidden ? 'hidden-line' : ''}`}>
      <div className='blueline' />
    </div>
  )
}

export default BlueLine
