import React from 'react'
import example from '../icons/example.png'

const Productpage = () => {
  return (
    <div className='page'>
      <div className="main-section">
        <div className="main-image">
          <div className="image-panel">
            <img src={example} alt="" srcset="" />
          </div>
          <div className="front-image">
            <img src={example} alt="" srcset="" />
          </div>
        </div>
        <div className="main-info ">
          <div className="heading">
            <h2>Name of product</h2>
            <p>In stock</p>
          </div>
          <h4>Company Name: example</h4>
          <div className="MRP">
            <p>M.R.P : 1518</p>
            <p>Price: 1000</p>
            <p>You Save: 518</p>  
          </div>
          <div className="offer-container">
            <div className="offer">
              <p>Offer name</p>
              <p>15%</p>
            </div>
            <div className="offer">
              <p>Offer name</p>
              <p>15%</p>
            </div>
           
          </div>
        </div>
        <div className="main-buy">
          <div className="unit">
            <div className="unit-box">
              <h5>1 liter</h5>
              <p>price 400</p>
            </div>
          </div>
          <div className="pincode">
            <input type="number" placeholder='enter pincode'/>
            <button>Check</button>
          </div>
          <div className="pincode">
            <input type="number" placeholder='enter quantity' />
          </div>
          <div className="pincode">
            <button>Buy</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productpage