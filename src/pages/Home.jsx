import React from 'react'
import Banner from '../components/Banner'
import example from '../icons/example.png'
const Home = () => {
  return (
    <div className='page'>
     <div className="banner-container">
      <Banner heading={"hey this is heading"} image={example} para={"this is para"}/>
      <Banner heading={"hey this is heading"} image={example} para={"this is para"}/>  
      <Banner heading={"hey this is heading"} image={example} para={"this is para"}/> 
     </div>
    </div>
  )
}

export default Home