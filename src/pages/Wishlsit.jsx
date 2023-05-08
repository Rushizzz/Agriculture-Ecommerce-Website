import React from 'react'
import WishProduct from '../components/WishProduct'
import '../css/Wishlist.css'
import wishlistIcon from '../icons/wishlist.png'
import example from '../icons/example.png'
import { Link } from 'react-router-dom'

const Wishlsit = () => {
  return (
    <div className='brand-page'>
        <div className="wishlist-container">
            <div className="heading">
                <img src={wishlistIcon}/>
                <h1>Wish-List</h1>
            </div>
            <div className="product-container">
                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />

                <WishProduct
                  icon = {wishlistIcon}
                  image = {example}
                  name = {"Pesticide"}
                  description={"Safer Neem Oil Pesticide"}
                  price = {"150"}
                  link={'/'}
                />
            </div>
        </div>
        <Link><h2>Continue Shopping</h2></Link>
    </div>
  )
}

export default Wishlsit