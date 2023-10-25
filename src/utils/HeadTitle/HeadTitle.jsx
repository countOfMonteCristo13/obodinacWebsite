import React from 'react'
import './headtitle.css'

const HeadTitle = ({title, color}) => {

  return (
    <div className='title' id={color}>
      <h2>{title}</h2>
    </div>
  )
}

export default HeadTitle
