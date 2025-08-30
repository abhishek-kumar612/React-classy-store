import React from 'react'
import HomeBanner from './HomeBanner';
import Products from "./Products";
import Categories from "./Categories";
import AppVideo from './AppVideo';

const Home = (props) => {
  return (
    <>
    <HomeBanner/>
    <Categories/>
    <Products addtocart = {props.addtocart} BuyBtn = {props.BuyBtn}/>
    <AppVideo/>
    </>
  )
}

export default Home;