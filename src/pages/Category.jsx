import React from 'react'
import Categoryproduct from '../components/Categoryproduct'
import { Link } from 'react-router-dom'

import example from '../icons/example.png'

const Category = () => {

  const category1 = "Fertilizers"
  const category2 = "Pesticides"
  const category3 = "Seeds"

  return (
    <div className='page category-bg' >
      <h1>Categories</h1>
      <div className="category-container">
        <Link to="/category1" state={{ heading: category1 }} className='category-links'>
          <Categoryproduct 
            heading={category1} 
            image={example}/>        
        </Link>
        <Link to="/category1" state={{ heading: category2 }} className='category-links'>
          <Categoryproduct 
            heading={category2} 
            image={example}/>        
        </Link>
        <Link to="/category1" state={{ heading: category3 }} className='category-links'>
          <Categoryproduct 
            heading={category3} 
            image={example}/>        
        </Link>
        
       </div>
    </div>
  )
}

export default Category