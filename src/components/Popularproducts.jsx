import React from 'react'
import Product from './Product'
import example from '../icons/example.png'
import {Link } from 'react-router-dom'

//images of products
import p from '../images/p.png'
import w from '../images/w.png'
import pump from '../images/pump.png'
import f from '../images/f.png'
import hh from '../images/hh.png'

const Popularproducts = () => {
  return (
    <div className='popular-products'>
        <h1>Popular Products</h1>
        <div className="product-container">
            <Product 
                itemImage={p}
                itemName={"Pesticide"}
                info={"Safer Neem Oil Pesticide"}
                itemPrice={"150"}
                />

            <Product 
                itemImage={w}
                itemName={"Wheat Seeds"}
                info={"Sakshi Wheat Seeds (HD 8959)"}
                itemPrice={"1500"}
                />

            <Product 
                itemImage={pump}
                itemName={"Pump"}
                info={"Neptune Hand Pump"}
                itemPrice={"150"}
                />

            <Product 
                itemImage={f}
                itemName={"Fertilizer"}
                info={"IPL Super Phosphate Fertilizer"}
                itemPrice={"150"}
                />

            <Product 
                itemImage={hh}
                itemName={"Handheld"}
                info={"UNISON Economy Range Tools"}
                itemPrice={"150"}
                />
        </div>
        <Link className='explore-more' to='#'>Explore more</Link>
    </div>
  )
}

export default Popularproducts