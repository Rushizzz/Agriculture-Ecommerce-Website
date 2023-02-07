import React from 'react'

const Product = (props) => {
  return (
    <div className='product'>
        <div className="product-image">
            <img src={props.itemImage}/>
        </div>
        <div className="product-info">
            <h3>{props.itemName}</h3>
            <p>{props.info}</p>
            <h3>₹{props.itemPrice}</h3>
        </div>
    </div>
  )
}

export default Product