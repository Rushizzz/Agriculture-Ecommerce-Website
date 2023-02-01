import './App.css';
import './mobileView.css';
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
import bar from './icons/bar.png'
import close from './icons/close.png'
import Category from './pages/Category';
import Category1 from './pages/Category1';
import Productpage from './pages/Productpage';
import Signup from './pages/Signup';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  return <>
    <nav className="Navigation">
      <div className="logo">
        LOGO
      </div>
      <div className="search">
        Search
        <div className="searchcontainer">
          <select placeholder='cateogry'>
            <option value="Products">category</option>
            <option value="Seeds">Seeds</option>
            <option value="Fertilizers">Fertilizers</option>
          </select>
          <input type="text" placeholder='search products' className='searchBar'/>
        </div>
      </div>
      <div className='Navbar'>
        <Link className='links' to="/">Home</Link>
        <Link className="links" to="/products">Category</Link>
        <Link className="links" to="/signin">Sign In</Link>
      </div>

      <div id='mobileView' className={`Navbar-mobile ${toggleMenu && 'hide'}`}>
        <div className="link-container">
          <Link className='links' to="/" onClick={toggleNav}>Home</Link>
          <Link className="links" to="/products" onClick={toggleNav}>Products</Link>
          <Link className="links" to="/signin" onClick={toggleNav}>Sign In</Link>
        </div>
      </div>
      <button className='btn' onClick={toggleNav}>{toggleMenu && <img src={bar}/>} {!toggleMenu && <img src={close}/>} </button>
    </nav>
    <div>
      <Outlet/>
    </div>
  </>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home/>} />
      <Route path="/data" element={<Data/>} />
      <Route path="/products" element={<Category/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/category1" element={<Category1/>}/>
      <Route path='/productpage' element={<Productpage/>}/>
      <Route path='/signup' element={<Signup/>}/>
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
