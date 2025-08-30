import React from 'react'
import MensProducts from './MensProducts';
import Accessories from './Accessories';
import WomenProducts from './WomenProducts';

const AllProducts = (props) => {
  return (
    <>
    <Accessories addtocart = {props.addtocart} BuyBtn = {props.BuyBtn}/>
    <MensProducts addtocart = {props.addtocart} BuyBtn = {props.BuyBtn}/>
    <WomenProducts addtocart = {props.addtocart} BuyBtn = {props.BuyBtn}/>
    </>
  )
}

export default AllProducts;