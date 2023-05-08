import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import firebaseApp from './firebaseApp'

const Popularpage = () => {
  const [products, setProducts] = useState([]);
  const firebase = firebaseApp;

  useEffect(() => {
    const getPopularProducts = async () => {
      // Get all documents from popularproducts collection
      const popularProductsSnapshot = await firebase.firestore().collection('popularproducts').get();
      // Extract PID values from each document
      const pids = popularProductsSnapshot.docs.map(doc => doc.data().PID);
      // Query products collection for documents where ProductID matches one of the PID values
      const productsSnapshot = await firebase.firestore().collection('products').where('ProductID', 'in', pids).get();
      // Extract attribute values from matching documents
      const productsData = productsSnapshot.docs.map(doc => doc.data());
      // Update state with attribute values
      setProducts(productsData);
    }

    getPopularProducts();
  }, []);

  return (
    <div className='popular-product-page container-height'>
      <div className='popular-page-products popular-container-height'>
        <h1>Popular Products</h1>
        <div className='product-container'>
          {products.map((product) => (
            <Product
              key={product.ProductID}
              id={product.ProductID}
              itemImage1={product.ProductImage1}
              itemImage2={product.ProductImage2}
              itemImage3={product.ProductImage3}
              itemImage4={product.ProductImage4}
              itemName={product.ProductName}
              itemRating={product.ProductRating}
              itemBrand={product.ProductBrand}
              info={""}
              itemPrice={product.ProductPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularpage;