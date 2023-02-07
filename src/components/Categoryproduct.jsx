import React from 'react'


const Categoryproduct = (props) => {
  return (
    <div className='category-product' style={{backgroundImage: `url(${props.bg})`}} >
        <h1>{props.heading}</h1>
    </div>
  )
}

export default Categoryproduct