import React from 'react'
import '../css/SignIn.css'
import { Link,useNavigate } from 'react-router-dom'
import firebaseApp from './firebaseApp'

const Signin = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password)
      navigate('/')
      // Signed in successfully
    } catch (error) {
      alert(error)
    }
  
  
  }
  return (
    <div className='brand-page'>
      <div className="signin-container">
        <div className="signin-form">
          <h1>Login</h1>
          <div className="signin-info">
            <input type="text" placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
            <button className='signin-btn' onClick={handleSignIn}>Submit</button>
          </div>
          New here? <br />
          <Link className='acc-create-btn' to='/signup'>Create your account</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin