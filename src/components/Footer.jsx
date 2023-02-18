import React from 'react'
import { Link } from 'react-router-dom'
import example from '../icons/example.png'
import facebook from '../icons/facebook.png'
import twiter from '../icons/twiter.png'
import insta from '../icons/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="logo-footer">
                <img src={example}/>
                <div className="social-links">
                    <a href="" className='social-link'>
                        <img src={facebook}/>
                    </a>
                    <a href="" className='social-link'>
                        <img src={twiter}/>
                    </a>
                    <a href="" className='social-link'>
                        <img src={insta}/>
                    </a>
                </div>
            </div>
            <div className="footer-links">
                <h3>My Account</h3>
                <Link to='#' className='footer-link'>Profile</Link>
                <Link to='#' className='footer-link'>Sign in</Link>
                <Link to='#' className='footer-link'>Register</Link>
                <Link to='#' className='footer-link'>Order status</Link>
                <Link to='#' className='footer-link'>Favourites</Link>
                <Link to='#' className='footer-link'>Cart</Link>
            </div>

            <div className="footer-links">
                <h3>Shop</h3>
                <Link to='/popularproducts' className='footer-link'>Most Popular</Link>
                <Link to='/brands' className='footer-link'>Brands</Link>
                <Link to='/products' className='footer-link'>Categories</Link>
                <Link to='/crops' className='footer-link'>Crops</Link>
            </div>

            <div className="footer-links">
                <h3>Help</h3>
                <Link to='#' className='footer-link'>Shipping</Link>
                <Link to='#' className='footer-link'>Returns</Link>
            </div>

            <div className="footer-links">
                <h3>Useful Links</h3>
                <Link to='#' className='footer-link'>About us</Link>
                <Link to='#' className='footer-link'>Contact us</Link>
                <Link to='#' className='footer-link'>Register</Link>
                <Link to='#' className='footer-link'>Testimonials</Link>
                <Link to='#' className='footer-link'>FAQ's</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer

