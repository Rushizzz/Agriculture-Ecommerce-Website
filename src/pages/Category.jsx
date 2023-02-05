import React from 'react'
import Categoryproduct from '../components/Categoryproduct'
import { Link } from 'react-router-dom'

import example from '../icons/example.png'
import seedsBG from '../images/seeds.png'
import fertilizerBG from '../images/fertilizers.png'
import pesticidesBG from '../images/pesticides.png'
import organicBG from '../images/organicfarming.png'
import kitchenBG from '../images/kitchengarden.png'
import toolsBG from '../images/tools.png'


const Category = () => {

  const category1 = "Seeds"
  const category2 = "Fertilizers"
  const category3 = "Pesticides"
  const category4 = "Organic farming"
  const category5 = "Kitchen Garden"
  const category6 = "Tools"

  return (
    <div className='home-2' id='home2'>
      <h1>Explore by Category</h1>
      <div className="category-container">
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category1} 
            bg={seedsBG}/>        
        </Link>
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category2} 
            bg={fertilizerBG}/>        
        </Link>
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category3} 
            bg={pesticidesBG}/>        
        </Link>
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category4} 
            bg={organicBG}/>        
        </Link>
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category5} 
            bg={kitchenBG}/>        
        </Link>
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category6} 
            bg={toolsBG}/>        
        </Link>
       </div>
    </div>
  )
}

export default Category