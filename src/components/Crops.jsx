import React from 'react'
import Cropoption from './Cropoption'
import {Link} from 'react-router-dom'
//crops images
import wheat from '../images/wheat.png'
import rice from '../images/rice.png'
import tomato from '../images/tomato.png'
import onion from '../images/onion.png'
import sugar from '../images/sugar.png'
const Crops = () => {
  return (
    <div className='crops-products'>
        <h1>Crops</h1>
        <div className="crop-container">
            <Link className='crop-link' to='#'>
                <Cropoption
                    image={wheat}
                    cname={"Wheat"}
                />    
            </Link>
            <Link className='crop-link' to='#'>
                <Cropoption
                    image={rice}
                    cname={"Rice"}
                />    
            </Link>
            <Link className='crop-link' to='#'>
                <Cropoption
                    image={tomato}
                    cname={"Tomato"}
                />    
            </Link>
            <Link className='crop-link' to='#'>
                <Cropoption
                    image={onion}
                    cname={"Onion"}
                />    
            </Link>
            <Link className='crop-link' to='#'>
                <Cropoption
                    image={sugar}
                    cname={"Sugar"}
                />    
            </Link>
        </div>
        <Link className='explore-more' to='/crops'>Explore more</Link>
    </div>
  )
}

export default Crops