import React from 'react'

const Product = (props) => {
  return (
    <div className='product'>
        <div className="product-image">
            <img src={props.itemImage}/>
        </div>
        <div className="product-info">
            <h3>{props.itemName}</h3>
            <h3>Price : {props.itemPrice}</h3>
            <div className="product-buttons">
                <button>Buy now</button>
                {/* <button>Add to cart</button> */}
            </div>
        </div>
    </div>
  )
}

export default Product