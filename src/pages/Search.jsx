import React, { useState, useEffect } from 'react';
import firebaseApp from '../pages/firebaseApp';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';
import Nothing from '../components/Nothing';

const Search = () => {
  const [products, setProducts] = useState([]);
  const firebase = firebaseApp;
  const db = firebase.firestore();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get('query');

  useEffect(() => {
    const fetchProducts = async () => {
        const start = searchValue;
        const end = start + '\uf8ff';
        const querySnapshot = await db.collection('products')
          .orderBy('ProductName')
          .startAt(start)
          .endAt(end)
          .get();
        const results = querySnapshot.docs.map(doc => doc.data());
        setProducts([]);
        setProducts(results);
      }
    fetchProducts();
  }, [searchValue]);

  return (
    <div className='popular-product-page container-height'>
      <div className='popular-page-products popular-container-height'>
        <h1>Search result for "{searchValue}"</h1>
        <div className='product-container'>
          {products.length === 0 ? (
            <Nothing info={searchValue}/>
          ) : (
            products.map((product) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Search;