import {React,useState} from 'react';
import { Link,useNavigate   } from 'react-router-dom';
import firebaseApp from './firebaseApp'


const db = firebaseApp.firestore()

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState('')
  const [city, setcity] = useState('')
  const [state, setstate] = useState('')
  const [address, setaddress] = useState('')
  const [pin, setpin] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };


  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      const user = userCredential.user
      await db.collection('users').doc(user.uid).set({ name, state, city, address, pin, gender })
      navigate('/signin')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='brand-page'>
      <div className="signin-container">
        <div className="signup-form">
          <h1>Register</h1>
          <div className="signup-info">
            <input type="text" placeholder='   Enter Name' onChange={e => setname(e.target.value)}/>
            <input type="text" placeholder='   Enter State' onChange={e => setstate(e.target.value)}/>
            <input type="text" placeholder='   Enter City' onChange={e => setcity(e.target.value)}/>
            <input type="text" placeholder='   Enter Address' onChange={e => setaddress(e.target.value)}/>
            <input type="text" placeholder='   Enter Postal code' onChange={e => setpin(e.target.value)}/>
            <input type="text" placeholder='   Enter email' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='   Create password' onChange={e => setPassword(e.target.value)} />
            <select onChange={handleChange}>
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <button id='sign-in-button' className='signin-btn c-acc' onClick={handleSignUp}>Create account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;