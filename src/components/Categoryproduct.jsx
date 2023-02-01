import React from 'react'


const Categoryproduct = (props) => {
  return (
    <div className='category-product'>
        <div className="image">
            <img src={props.image} />
        </div>
        <h3>{props.heading}</h3>
    </div>
  )
}

export default Categoryproduct