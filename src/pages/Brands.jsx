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
    <div className='home-2'>
      <h1>Explore by Brands</h1>
      <div className="category-container">
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={RIL}
            title={"TATA"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={NS}
            title={"NUZIVEEDU"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={PG}
            title={"POABS"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={N}
            title={"NATIONAL"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={OP}
            title={"OUPONT"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={AM}
            title={"ADVANTA"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={RS}
            title={"RASI"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={GAL}
            title={"GODREJ"}
          />
        </Link>
        <Link className='brand-name' to='/brand'>
          <Brandproduct
            brandicon={l}
            title={"LEMKEN"}
          />
        </Link>
      </div>
    </div>
  )
}

export default Brands