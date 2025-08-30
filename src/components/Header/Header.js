import React, { useEffect, useState } from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { NavLink, Outlet } from 'react-router-dom';
import CartPage from '../Home/CartPage/CartPage';

const Header = (props) => {
  let [navbar, setnavbar] = useState(false);
  let [togglemenu, settogglemenu] = useState(false);
  let [togglemenuicon, settogglemenuicon] = useState(false);
  let [scroll, setscroll] = useState(false);
  let [line, setline] = useState(0);
  let [searchpage, setsearchpage] = useState(false);
  let [cartpage, setcartpage] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      if(window.pageYOffset >= 100){
        setnavbar(true);
        setscroll(true);
      }
      else{
        setnavbar(false);
        setscroll(false);
      }

      let totalheight = document.documentElement.scrollHeight - window.innerHeight;
      let showLine = ((window.pageYOffset / totalheight) * 100).toFixed();
      setline(showLine);
    })
    
  })

  let toggleMenuBar = () =>{
    settogglemenu(togglemenu => !togglemenu);
    settogglemenuicon(togglemenuicon => !togglemenuicon);
  }

  // let toggleMenuBarClose = () =>{
  //   settogglemenu(false);
  // }
  
  let searchPageShow = () =>{
    setsearchpage(true);
  }

  let searchPageHide = () =>{
    setsearchpage(false);
  }
  
  let cartPageShow = () =>{
    setcartpage(true);
  }

  let cartPageHide = () =>{
    setcartpage(false);
  }

  let navactive = navbar ? ' navactive' : '';
  let toggleMenuActive = togglemenu ? ' toggleMenuActive' : '';
  let togglemenuiconActive = togglemenuicon ?  <GrClose/>: <HiOutlineMenuAlt2/>;
  let scrollactive = scroll ? ' scrollactive' : '';
  let searchActive = searchpage ? ' searchActive' : '';
  let cartActive = cartpage ? ' cartActive' : '';

  let scrollbtn = () =>{
    window.scrollTo(0, 0);
  }

  return (
    <>
    <header className={`${navactive}`}>
    <div className="toggleMenu" onClick={toggleMenuBar}>{togglemenuiconActive}</div>
    <NavLink className="logo" to='/'><span>CLASSY</span> Store</NavLink>
      <nav className = {`${toggleMenuActive}`}>
        {/* <div className="toggleMenuClose" onClick={toggleMenuBarClose}><GrClose/></div> */}
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/shop/all'>Shop</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
      </nav>
      <div className="search">
        <li onClick={searchPageShow} title='Search'><SearchIcon/></li>
        {/* <li title='Favourites'><FavoriteIcon/></li> */}
        <li onClick={cartPageShow} title='Cart'><ShoppingCartIcon/>
          <sup className={`${props.cartAnim}`}>{props.TotalcartItems}</sup>
        </li>
      </div>
    </header>
      <div className={`scrollbtn${scrollactive}`} onClick={scrollbtn}><RiArrowUpDoubleLine/></div>
      <div className="scrollLine" style={{width: `${line}%`}}></div>
      <div className={`searchpage${searchActive}`}>
        <div className="searchinput"><input autoFocus type="text" placeholder='Search Products......'/>
        <button>Search</button>
        </div>
        <div className="searchCancel" onClick={searchPageHide}><AiFillCloseCircle/></div>
      </div>
      <CartPage TotalCartPrice = {props.TotalCartPrice} cartActive = {cartActive} cartPageHide = {cartPageHide} clearAllCart = {props.clearAllCart} removesingle = {props.removesingle}/>
      <div className = {`cartNotification${props.cartNotify}`}>
        <CheckCircleIcon style={{fontSize: '2.5rem'}}/>
        <span className = {`bar${props.cartNotifybar}`}></span>
        <h1>Added Successfully <br />
          <span>{props.productsNotification}</span>
        </h1>
      </div>
      <Outlet/>
    </>
  )
}

export default Header;