import React, { useState, useEffect } from 'react';
import firebase from './firebaseApp';
import '../css/Buynow.css'
const BuyNow = (props) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  // Get the product details from the query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const productDetails = {
    name: queryParams.get('name'),
    price: queryParams.get('price'),
    rating: queryParams.get('rating'),
    brand: queryParams.get('brand'),
    images: JSON.parse(queryParams.get('images'))
  };
  console.log("this is UID =",props.uid)
  useEffect(() => {
    // Get the user's data from Firestore and pre-fill the form
    const db = firebase.firestore();
    db.collection('users').doc(props.uid).get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        setAddress(data.address);
        setCity(data.city);
        setState(data.state);
        // setZip(data.zip);
      }
    });
  }, [props.uid]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the user's data in Firestore
    const db = firebase.firestore();
    db.collection('users').doc(props.uid).update({
      address,
      city,
      state,
    //   zip
    });

    // Generate a unique order ID
    const orderId = Date.now().toString();

    // Create a new order in Firestore
    db.collection('users').doc(props.uid).collection('orders').add({
      orderId,
      productDetails,
      address,
      city,
      state,
    //   zip
    });
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Address:
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <br />
            <label>
                City:
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            </label>
            <br />
            <label>
                State:
                <input type="text" value={state} onChange={e => setState(e.target.value)} />
            </label>
            <br />
            {/* <label>
                Zip:
                <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
            </label> */}
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default BuyNow;