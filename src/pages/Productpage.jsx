import React from 'react';
import { useState, useEffect } from 'react'; // import the useEffect hook
import { useLocation, useNavigate } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import BuyNow from './BuyNow'; // import the BuyNow component
import '../css/Product.css';
import firebase from './firebaseApp'; // import your Firestore instance

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const price = queryParams.get('price');
  const rating = queryParams.get('rating');
  const brand = queryParams.get('brand');
  const images = JSON.parse(queryParams.get('images'));

  const [quantity, setQuantity] = useState(1);
  const [showBuyNow, setShowBuyNow] = useState(false); // new state variable to track if the BuyNow component should be rendered
  const [currentUser, setCurrentUser] = useState(null); // new state variable to track the current user

  useEffect(() => {
    // subscribe to the onAuthStateChanged method from Firebase to check if a user is signed in
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user); // if a user is signed in, update the currentUser state with the user object
      } else {
        setCurrentUser(null); // if no user is signed in, set the currentUser state to null
      }
    });
    return () => unsubscribe(); // unsubscribe from the onAuthStateChanged method when the component unmounts
  }, []);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity - 1);

  const addToCart = (product) => {
    // get the current user's UID
    const uid = firebase.auth().currentUser.uid;
    console.log(uid)
    const db = firebase.firestore();
    // create a new document in the cart collection with the product details
    db.collection('users').doc(uid).collection('cart').add(product);
  };
  const handleBuyNow = () => {
    setShowBuyNow(true); // update the showBuyNow state to true when the Buy Now button is clicked
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  if (showBuyNow) {
    // if showBuyNow is true, render only the BuyNow component inside the productpage-container element
    return (
      <div className="productpage-container">
        <BuyNow uid={currentUser.uid}/>
      </div>
    );
  }

  return (
    <div className="productpage-container">
      <div className="product-page">
        <div className="product-page__image-gallery">
          <ImageGallery images={images} />
        </div>
        <div className="product-page__details">
          <h1>{name}</h1>
          <div className="product-page__rating">{stars}</div>
          <div className="product-page__price">${price}</div>
          <div className="product-page__brand">Brand: {brand}</div>
          <div className="product-page__quantity">
            <button onClick={handleDecrease}>-</button>
            {quantity}
            <button onClick={handleIncrease}>+</button>
          </div>
          <div className="productpage-buttons">
            <button onClick={handleBuyNow}>Buy Now</button>
            <button onClick={() => addToCart({ name, price, rating, brand, images })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* display a message if no user is signed in */}
      {!currentUser && <p>You are not signed in. Please sign in to add products to your cart.</p>}
    </div>
  );
};

export default ProductPage;