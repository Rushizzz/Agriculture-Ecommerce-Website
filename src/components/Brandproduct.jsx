import React from 'react'
import { Link } from 'react-router-dom'

const Brandproduct = (props) => {
  const queryParams = new URLSearchParams({
    name: props.title
  });
  return (
    <div className="brand-name">
      <div className='brnad-name-container'>
        <div className="brand-logo">
            <img src={props.brandicon}/>
        </div>
        <div className="info">
          <Link className='b-link' to={`/brand/${props.title}?${queryParams}`}>
            <h3>{props.title}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Brandproduct