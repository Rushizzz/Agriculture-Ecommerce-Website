import React from 'react'
import { useLocation } from 'react-router-dom';
import Filter from '../components/Filter'

const Brand1 = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  return (
    <div className='brand-page'>
      <div className="wishlist-container">
        <div className="heading">
          <h1>{name}</h1>
        </div>
        <Filter/>
      </div>
    </div>
  )
}

export default Brand1