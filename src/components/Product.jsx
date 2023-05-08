import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';
import image from '../images/wheat.png';
import firebase from '../pages/firebaseApp'; // import your firebase db

const Product = (props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { currentUser } = firebase.auth(); // get current user from Auth context
  const db = firebase.firestore();
  const images = [props.itemImage1, props.itemImage2, props.itemImage3, props.itemImage4];
  const queryParams = new URLSearchParams({
    name: props.itemName,
    price: props.itemPrice,
    rating: props.itemRating,
    brand: props.itemBrand,
    images: JSON.stringify(images),
  });

  useEffect(() => {
    if (currentUser) {
      const wishlistRef = db
        .collection('users')
        .doc(currentUser.uid)
        .collection('wishlist');
      const unsubscribe = wishlistRef
        .where('name', '==', props.itemName)
        .onSnapshot((snapshot) => {
          setIsWishlisted(!snapshot.empty);
        });
      return () => unsubscribe();
    }
  }, [currentUser]);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    if (currentUser) {
      const ordersRef = db
        .collection('users')
        .doc(currentUser.uid)
        .collection('wishlist');
      if (!isWishlisted) {
        ordersRef.add({
          name: props.itemName,
          price: props.itemPrice,
          rating: props.itemRating,
          brand: props.itemBrand,
          images: images,
        });
      } else {
        ordersRef
          .where('name', '==', props.itemName)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
      }
    }
  };

  return (
    <div className='product'>
      <div className='wishlist-icon' onClick={handleWishlistClick}>
        {isWishlisted ? (
          <i className='fas fa-heart' style={{ color: '#07484A' }}></i>
        ) : (
          <i className='far fa-heart'></i>
        )}
      </div>
      <div className='product-image'>
        <img src={props.itemImage1} />
      </div>
      <div className='product-info'>
        <Link className='p-link' to={`/products/${props.id}?${queryParams}`}>
          <h3>{props.itemName}</h3>
        </Link>
        <p>{props.info}</p>
        <h3>₹{props.itemPrice}</h3>
      </div>
    </div>
  );
};

export default Product;