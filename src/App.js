import React, { useState } from "react";
import {Suspense, lazy} from 'react'
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import ErrorPage from "./components/Error/ErrorPage";
// import Home from "./components/Home/Home";
import AllProducts from "./components/Shop/ProductsCategories/AllProducts";
import MensProducts from "./components/Shop/ProductsCategories/MensProducts";
import WomenProducts from "./components/Shop/ProductsCategories/WomenProducts";
import Accessories from "./components/Shop/ProductsCategories/Accessories";
import ProductsPage from "./components/Home/ProductsPage.js/ProductsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Home = lazy(() =>import('./components/Home/Home'));
const Header = lazy(() =>import('./components/Header/Header'));
const Footer = lazy(() =>import('./components/Footer/Footer'));

let CartData = [];

function App() {
  let [ProductsPageName, setProductsPageName] = useState('Products Name');
  let [ProductsPageRating, setProductsPageRating] = useState('Products Rating');
  let [ProductsPageImg, setProductsPageImg] = useState('Products Image');
  let [ProductsPageImgs1, setProductsPageImgs1] = useState('Products Image');
  let [ProductsPageImgs2, setProductsPageImgs2] = useState('Products Image');
  let [ProductsPageImgs3, setProductsPageImgs3] = useState('Products Image');
  let [ProductsPagePrice, setProductsPagePrice] = useState('Products Price');
  let [cartNotificaion, setcartNotificaion] = useState(false);
  let [cartNotificaionbar, setcartNotificaionbar] = useState(false);
  let [productsNotification, setproductsNotification] = useState('');
  let [cartactive, setcartactive] = useState(false);
  let [addtocart, setaddtocart] = useState(CartData.length);

  let AddtoCart = (AllProducts, index) =>{
    setaddtocart(CartData.unshift(
      {
        img: AllProducts.img,
        name: AllProducts.name,
        price: AllProducts.price,
        rating: AllProducts.rating,
      },
    ));
    setaddtocart(CartData.length);

    setcartactive(true);
    setTimeout(() =>{
      setcartactive(false);
    }, 700)

    setcartNotificaion(true);
    setTimeout(() =>{
      setcartNotificaion(false);
    }, 1000)
    
    setcartNotificaionbar(true);
    setTimeout(() =>{
      setcartNotificaionbar(false)
    }, 1000)

    setproductsNotification(AllProducts.name)

  }

  let removesinglecart = (index) =>{
    setaddtocart(CartData.splice(index, 1));
    setaddtocart(CartData.length);
    // console.log(CartData);
  }

  let ClearAllCart = () =>{
    setaddtocart(CartData.splice(0, CartData.length))
    setaddtocart(CartData.length);
    // console.log(CartData);
  }

  let BuyBtn = (AllProducts, index) =>{
    setProductsPageName(AllProducts.name);
    setProductsPageRating(AllProducts.rating);
    setProductsPageImg(AllProducts.img);
    setProductsPageImgs1(AllProducts.imgs1);
    setProductsPageImgs2(AllProducts.imgs2);
    setProductsPageImgs3(AllProducts.imgs3);
    setProductsPagePrice(AllProducts.price);
  }

  let TotalCartPrice = () =>{
    let Total = 0;
    CartData.forEach((cartPrice) =>{
      Total += cartPrice.price;
    })
    return Total;
  }

  let cartActive = cartactive ? 'cartActive' : '';
  let cartNotificationActive = cartNotificaion ? ' cartNotificationActive' : '';
  let cartNotificationbarActive = cartNotificaionbar ? ' cartNotificationbarActive' : '';

  return (
    <>
    <Suspense fallback = {<div className="loadingscreen"><div className="loading"></div><span>Loading....</span></div>}>
    <Header TotalCartPrice = {TotalCartPrice} productsNotification = {productsNotification} cartAnim = {cartActive} cartNotify = {cartNotificationActive} cartNotifybar = {cartNotificationbarActive} TotalcartItems = {addtocart} clearAllCart = {ClearAllCart} removesingle = {removesinglecart} addtocart = {AddtoCart}/>
    <ScrollToTop/>
    <Routes>
        <Route path = "/" element = {<Home addtocart = {AddtoCart} BuyBtn = {BuyBtn}/>}></Route>
        <Route path = "/shop" element = {<Shop/>}>
            <Route path="/shop/all" element = {<AllProducts addtocart = {AddtoCart} BuyBtn = {BuyBtn} />}></Route>
            <Route path="men" element = {<MensProducts addtocart = {AddtoCart} BuyBtn = {BuyBtn}/>}></Route>
            <Route path="women" element = {<WomenProducts addtocart = {AddtoCart} BuyBtn = {BuyBtn}/>}></Route>
            <Route path="accessories" element = {<Accessories addtocart = {AddtoCart} BuyBtn = {BuyBtn}/>}></Route>
        </Route>
        <Route path = "/blog" element = {<Blog/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/products" element = {<ProductsPage 
                        ProductsPageName = {ProductsPageName}
                        ProductsPageRating = {ProductsPageRating}
                        ProductsPageImg = {ProductsPageImg}
                        ProductsPageImgs1 = {ProductsPageImgs1}
                        ProductsPageImgs2 = {ProductsPageImgs2}
                        ProductsPageImgs3 = {ProductsPageImgs3}
                        ProductsPagePrice = {ProductsPagePrice}/>}></Route>
        <Route path = "*" element = {<ErrorPage/>}></Route>
    </Routes>
    <Footer/>
    </Suspense>
    </>
  );
}

export default App;
export {CartData};
