import React from 'react'
import Product from './Product'
import example from '../icons/example.png'

const Popularproducts = () => {
  return (
    <div className='home-2' id='home3'>
        <h1>Popular Products</h1>
        <div className="product-container">
            <Product 
                itemImage={example}
                />
        </div>
    </div>
  )
}

export default Popularproducts