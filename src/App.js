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
import searchHIcon from './icons/searchH.png'
import Brand1 from './pages/Brand1';
import Footer from './components/Footer';
import CropsPage from './pages/CropsPage';
import Brandpage from './pages/Brandpage';
import Categorypage from './pages/Categorypage';
import Popularpage from './pages/Popularpage';

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
          <Link className="links-mobile" to="/products">
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
                <div className="search-container">
                  <input type="text" placeholder='    search products' className='searchBar'/>
                  <div className="search-btn">
                    <img src={searchHIcon}/>
                  </div>
                </div>
                
                  <Link className="second-links" to="/products"><img src={cartIcon}/></Link>
                  <Link className="second-links" to="/signin"><img src={signinIcon}/></Link>
                
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home/>} />
      <Route path="/data" element={<Data/>} />
      <Route path="/products" element={<Categorypage/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/category1" element={<Category1/>}/>
      <Route path='/productpage' element={<Productpage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/brands' element={<Brandpage/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/brand' element={<Brand1/>}/>
      <Route path='/crops' element={<CropsPage/>}/>
      <Route path='/popularproducts' element={<Popularpage/>}/>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
