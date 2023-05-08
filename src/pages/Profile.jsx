import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Profile.css'
import logoutIcon from '../icons/logout.png'
import firebaseApp from './firebaseApp'
import { doc, getDoc } from 'firebase/firestore';
import "firebase/auth";

const auth = firebaseApp.auth();

const db = firebaseApp.firestore();
const Profile = (props) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
  
    const [Name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [City, setCity] = useState("")
    const [State, setState] = useState("")
    const [pincode, setpincode] = useState("")
    const [gender, setgender] = useState("")
    const [email, setemail] = useState("")

    const handleLogout = async () => {
      try {
        await auth.signOut();
        // Handle successful logout
      } catch (error) {
        // Handle error
      }
    };

    useEffect(() => {
      const getData = async () => {
        if (props.user) {
          // Get data for current user
          try {
            console.log("hlo");
            const docRef = doc(db, "users", props.user.uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
              setUserData(docSnap.data());
              setName(docSnap.data().name);
              setAddress(docSnap.data().address);
              setCity(docSnap.data().city);
              setState(docSnap.data().state);
              setpincode(docSnap.data().pin);
              setgender(docSnap.data().gender);
              setemail(props.user.email);
              
            }
          } catch (error) {
            console.log(error);
          }
        }
      };
      getData();
    }, [user]);
  return (
    <div className='brand-page'>
        <div className="profile-container">
            <div className="profile-head">
                <h1>Hey, {Name}</h1>
                <div className="logout" onClick={handleLogout}>
                  <img src={logoutIcon} />
                  Logout
                </div>
            </div>
            <div className="profile-info">
            
               <div>Name : {Name} </div>
               <div>Address : {Address} </div>
               <div>City : {City} </div>
               <div>State : {State} </div>
               <div>Postal code : {pincode} </div>
               <div>Gender : {gender} </div>
               <div>Email Address : {email} </div>
               
            </div>
            <Link className='edit-detail'>Edit Details</Link>
            <div className="profile-btns">
                <Link to='/cart' className='profile-btn'>Cart</Link>
                <Link to='/wish-list' className='profile-btn'>Wish List</Link>
                <Link to='/cart' className='profile-btn'>Order</Link>
            </div>
        </div>
    </div>
  )
}

export default Profile