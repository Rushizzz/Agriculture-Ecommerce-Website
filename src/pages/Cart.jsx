import React, { useEffect, useState } from 'react'
import firebaseApp from './firebaseApp'
import WishProduct from '../components/WishProduct'
import wishlistIcon from '../icons/wishlist.png'
import cart from '../icons/cartblack.png'
import example from '../icons/example.png'
import { Link,  useNavigate } from 'react-router-dom'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const firebase = firebaseApp
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const cartRef = firebase.firestore().collection('users').doc(user.uid).collection('Cart');
        const snapshot = await cartRef.get();
        const items = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = doc.data();
            const storage = firebase.storage();
            const imageRef = storage.refFromURL(data.ProductImage);
            const imageUrl = await imageRef.getDownloadURL();
            return { ...data, imageUrl };
          })
        );
        setCartItems(items);
      } else {
        navigate('/signin');
      }
    };
    fetchCartData()
  })

  return (
    <div className='brand-page'>
      <div className="wishlist-container">
        <div className="heading">
          <h1>Cart</h1>
          <img src={cart} />
        </div>
        <div className="product-container">
          {cartItems.map(item => (
            <WishProduct
              key={item.ProductID}
              image={item.imageUrl}
              name={item.ProductName}
              price={item.ProductPrice}
              rating={item.ProductRating}
              link={'/'}
              cart={"Remove from cart"}
            />
          ))}
        </div>
      </div>
      <Link><h2>Proceed to checkout</h2></Link>
    </div>
  )
}

export default Cart