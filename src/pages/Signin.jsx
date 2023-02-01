import React from 'react'
import {Link} from 'react-router-dom'
const Signin = () => {
  return (
    <div className='page'>
      <div className="sign-in-box">
        <h2>Sign In</h2>
        <input type="number" name="phone" id="phone" placeholder='enter Phone number'/>
        <h3>OR</h3>
        <input type="email" name="email" id="email" placeholder='enter email'/>
        <button>Sign in</button>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Signin