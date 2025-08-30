// import React, { useEffect, useState } from "react";
import "./Products.css";
import './../Shop/ProductsCategories/ProductsCategories.css'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductsData } from "./ProductsData";

const Products = (props) => {
  // let [scrollproduct, setscrollproduct] = useState(false);

  // useEffect(() =>{
  //   window.addEventListener('scroll', () =>{
  //     if(window.pageYOffset >= 800){
  //       setscrollproduct(true);
  //     }
  //     else{
  //       setscrollproduct(false);
  //     }
  //   })
  // }, []);

  // let scrollproductActive = scrollproduct ? ' scrollproductActive' : '';
  return (
    <>
      <h1 className="productsHeading">All Products</h1>
      <div className="products">
        {ProductsData.map((ProductsDataval, index) => {
          return (
            <div className="img" key={index}>
              <div className="productimg">
                <img src={ProductsDataval.img} alt="products" />
              </div>
              <h1 className="name">{ProductsDataval.name}</h1>
              <div className="rating">{ProductsDataval.rating}</div>
              <div className="price">₹{ProductsDataval.price}
              <div className="addcart" onClick={() => props.addtocart(ProductsDataval, index)}>
                <p>Add to Cart</p>
                <ShoppingCartIcon style={{fontSize: '1.2rem'}}/>
              </div>
              </div>
              <Link to='/products' className="buybtn" onClick={() => props.BuyBtn(ProductsDataval, index)}>
                Buy Now
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
