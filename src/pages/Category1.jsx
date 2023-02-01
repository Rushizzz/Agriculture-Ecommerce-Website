import React from 'react'
import Product from '../components/Product'
import example from '../icons/example.png'
import { Link,useLocation } from 'react-router-dom'


const data ={
    heading: "titel",
}

const Category1 = () => {

    const location = useLocation()
    const { heading } = location.state

  return (
    <div className='page'>
        <div className="banner-container">
            <h2>{heading}</h2>
            <div className="category-inside">
                <div className="category-filter">
                    <h3>Price Range</h3>
                    <input type="text" placeholder='prices from'/>
                    to
                    <input type="text" placeholder='prices upto'/>
                    <h3>Brands</h3>
                    <div className="brands-container">
                        <div className="brand-select">
                            <label for="brand1">Brand1</label>
                            <input type="checkbox" name="brand1" id="brand1" />
                        </div>
                    </div>
                </div>
                <div className="category-items-container">
                    <Link className='textdecoration' to='/productpage'>
                        <Product 
                            itemName={data.heading}
                            itemImage={example}
                            itemPrice={"4000"}
                            itemInfo={"product information"}
                        />
                        
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category1