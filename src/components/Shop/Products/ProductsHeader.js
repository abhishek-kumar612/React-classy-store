import React from 'react'
import './Products.css'
import { NavLink, Outlet } from 'react-router-dom';

const ProductsHeader = (props) => {
  return (
    <>
        <div className="productsheader">
            <NavLink to="all">All</NavLink>
            <NavLink to="men">Men</NavLink>
            <NavLink to="women">Women</NavLink>
            <NavLink to="accessories">Accessories</NavLink>
        </div>
        <Outlet/>
    </>
  )
}

export default ProductsHeader;