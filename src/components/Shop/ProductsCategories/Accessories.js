import React from "react";
import "./ProductsCategories.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopAccessoriesData } from "./ShopData";

const Accessories = (props) => {
  return (
    <>
      <div className="products">
        {ShopAccessoriesData.map((shopaccessoriesdataval, index) => {
          return (
            <div className="img" key={index}>
              <div className="productimg">
                <img src={shopaccessoriesdataval.img} alt="products" />
              </div>
              <h1 className="name">{shopaccessoriesdataval.name}</h1>
              <div className="rating">{shopaccessoriesdataval.rating}</div>
              <div className="price">₹{shopaccessoriesdataval.price}
              <div className="addcart" onClick={() => props.addtocart(shopaccessoriesdataval, index)}>
                <p>Add to Cart</p>
                <ShoppingCartIcon style={{fontSize: '1.2rem'}}/>
              </div>
              </div>
              <Link to='/products' className="buybtn" onClick={() => props.BuyBtn(shopaccessoriesdataval, index)}>
                Buy Now
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accessories;
