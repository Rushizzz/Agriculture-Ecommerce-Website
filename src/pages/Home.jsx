import React from 'react'
import Banner from '../components/Banner'
import Popularproducts from '../components/Popularproducts'
import example from '../icons/example.png'
import Category from './Category'
const Home = () => {
  return (
    <div className='page'>
     <div className="home-1">
      <h1>Best Deals on <br /> Agricultural Products</h1>
      <h2>Explore different categories. Find the best deals.</h2>
      <button>Shop now</button>
     </div>
     <Category/>
     <Popularproducts/>
    </div>
  )
}

export default Home