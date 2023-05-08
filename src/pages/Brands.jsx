import React from 'react'
import Brandproduct from '../components/Brandproduct'
import Categoryproduct from '../components/Categoryproduct'
import {Link } from 'react-router-dom'

// brands logos
import RIL from '../icons/ril.png'
import NS from '../icons/ns.png'
import PG from '../icons/pg.png'
import N from '../icons/n.png'
import OP from '../icons/op.png'
import AM from '../icons/am.png'
import RS from '../icons/rs.png'
import GAL from '../icons/gal.png'
import l from '../icons/l.png'

const Brands = () => {
  return (
    <div className='brand-container'>
      <h1>Explore by Brands</h1>
      <div className="category-container">
          <Brandproduct
            brandicon={RIL}
            title={"TATA"}
          />
        
        
      </div>
    </div>
  )
}

export default Brands