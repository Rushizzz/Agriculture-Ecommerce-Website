import './App.css';
import './mobileView.css';
import './css/footer.css';
import './css/cropspage.css';
import './css/Brandpage.css';
import './css/Categorypage.css';
import './css/Popularpage.css';
import Home from './pages/Home';
import Data from './components/Data';
import {createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet
 } from 'react-router-dom';

import Signin from './pages/Signin';
import React, {useState, useEffect} from 'react'
import Category from './pages/Category';
import Category1 from './pages/Category1';
import Productpage from './pages/Productpage';
import Signup from './pages/Signup';
import Brands from './pages/Brands';
import Aboutus from './pages/Aboutus';

//icons imports
import homeIcon from './icons/home.png'
import categoryIcon from './icons/category.png'
import loginIcon from './icons/login.png'
import searchIcon from './icons/search.png'
import cartIcon from './icons/cart.png'
import signinIcon from './icons/signin.png'

import wishlistIcon from './icons/wishlist.png'
import Brand1 from './pages/Brand1';
import Footer from './components/Footer';
import CropsPage from './pages/CropsPage';
import Brandpage from './pages/Brandpage';
import Categorypage from './pages/Categorypage';
import Popularpage from './pages/Popularpage';
import Wishlsit from './pages/Wishlsit';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

//firebase initialization
import firebaseApp from './pages/firebaseApp';
import Login from './pages/Login';
import ProductPage from './pages/Productpage';
import SearchBar from './components/SearchBar';
import Search from './pages/Search';
import BuyNow from './pages/BuyNow';

const Navbar = () => {

   const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;
    

  return <>

    {isMobile ? (
      <nav className="Navigation-mobile">
      <div className="logo-mobile">
        LOGO
      </div>
      <div className="search-mobile">
          <div className="search-logo">
            <img src={searchIcon} />
          </div>
          <input type="text" placeholder='search products' className='searchBar-mobile'/>
      </div>
        <div className='Navbar-mobile'>
          <Link className='links-mobile' to="/">
            <img src={homeIcon}/>
            Home
          </Link>
          <Link className="links-mobile" to="/cart">
            <img src={categoryIcon}/>
            Category
          </Link>
          <Link className="links-mobile" to="/signin">
            <img src={loginIcon}/>
            Sign in
          </Link>
        </div>

    </nav>
    ):(
    <nav className="Navigation">
      <div className="nav-container">
        <div className="logo">
              LOGO
            </div>
              <div className='Navbar'>
                <Link className='links' to="/">Home</Link>
                <Link className="links" to="/products">Categories</Link>
                <Link className="links" to="/brands">Brands</Link>
                <Link className='links' to="/aboutus">About</Link>
              </div>
              <div className="search">
                  <SearchBar/>
                  
                    <Link className="second-links" to="/cart"><img src={cartIcon}/></Link>
                    <Link className="second-links" to="/login"><img src={signinIcon}/></Link>
                    
              </div>
        </div>
    </nav>
    )}
    <div>
      <Outlet/>
      <Footer/>
    </div>
    {isMobile?(
      <div className="yes"></div>
    ):(
      <div className="no"></div>
    )}
  </>
}

const ErrorComponent = () => {
  return <div>Oops! Something went wrong.</div>;
};

function App() {
  const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in
          setUser(user);
          // console.log(user.uid)
        } else {
          // User is signed out
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="/products" element={<Categorypage/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/category1" element={<Category1/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/brands' element={<Brandpage/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route 
                path="/brand/:id"
                element={<Brand1/>}
                errorElement={ErrorComponent}/>
          <Route path='/crops' element={<CropsPage/>}/>
          <Route path='/popularproducts' element={<Popularpage/>}/>
          <Route path='/wish-list' element={<Wishlsit/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route 
            path="/search"
            element={<Search/>}
            errorElement={ErrorComponent}
          />
          <Route
          path="/products/:id"
          element={<ProductPage/>}
          errorElement={ErrorComponent}
         />
         <Route path="/buynow" element={<BuyNow/>} />
        </Route>
      )
    )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
