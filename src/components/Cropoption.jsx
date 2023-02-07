import React from 'react'

const Cropoption = (props) => {
  return (
    <div className='crop-option'>
        <div className="image">
            <img src={props.image}/>
        </div>
        <h2>{props.cname}</h2>
    </div>
  )
}

export default Cropoption