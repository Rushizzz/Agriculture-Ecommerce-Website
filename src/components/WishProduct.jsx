import React from 'react'
import {Link} from 'react-router-dom'

const WishProduct = (props) => {
  return (
    <div className='wish-product'>
        <div className="fav-icon">
            <img src={props.icon}/>
        </div>
        <div className="product-image">
            <img src={props.image}/>
        </div>
        <div className="product-info">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Rs. {props.price}/-</p>
            <Link to={props.link}>Proceed to checkout</Link>
            <Link>{props.cart}</Link>
        </div>
    </div>
  )
}

export default WishProduct