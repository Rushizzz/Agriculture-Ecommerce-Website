import React from 'react'

const Brandproduct = (props) => {
  return (
    <div className='brnad-name-container'>
        <div className="brand-logo">
            <img src={props.brandicon}/>
        </div>
        <div className="info">
            <h3>{props.title}</h3>
        </div>
    </div>
  )
}

export default Brandproduct