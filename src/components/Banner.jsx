import React from 'react'

const Banner = (props) => {
  return (
        <div className="banner">
            <div className="banner-image">
                <img src={props.image}/>
            </div>
            <div className="banner-info">
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
            </div>
        </div>
  )
}

export default Banner

