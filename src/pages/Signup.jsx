import {React,useState} from 'react'

const Signup = () => {

  const [phone, setphone] = useState("")

  const onChangeHandler = event => {
    setphone(event.target.value);
 };

  const onSubmit = () => {
    console.log(phone)
  }
  return (
    <div className='page'>
        <div className="sign-in-box">
            <h2>
                Sign up
            </h2>
            <input onChange={onChangeHandler}  type="number" id="phone-number" placeholder='enter phone number' />
            <button onClick={onSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Signup