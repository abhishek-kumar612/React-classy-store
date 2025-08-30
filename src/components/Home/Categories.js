import React, { useEffect, useState } from 'react';
import './Categories.css';
import { NavLink, Outlet } from 'react-router-dom';

const Categories = () => {
  let [categories, setcategories] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      if(window.pageYOffset >= 200){
        setcategories(true);
      }
      else{
        setcategories(false);
      }
    })
  }, [])

  let categoriesActive = categories ? '  categoriesActive' : '';
  return (
    <>
    <div className="categoriesMain">
        <div className = {`categories${categoriesActive}`}>
            <img src = {require("../images/catogarymen.png")} alt="categories" />
            <h1>Mens</h1>
            <NavLink to="/shop/men" className='buybtn'>Shop now</NavLink>
        </div>
        <div className = {`categories${categoriesActive}`}>
            <img src = {require("../images/catogarywomen.png")} alt="categories" />
            <h1>Womens</h1>
            <NavLink to="/shop/women" className='buybtn'>Shop now</NavLink>
        </div>
        <div className = {`categories${categoriesActive}`}>
            <img src = {require("../images/catogaryaccesories.png")} alt="categories" />
            <h1>Accessories</h1>
            <NavLink to="/shop/accessories" className='buybtn'>Shop now</NavLink>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Categories;