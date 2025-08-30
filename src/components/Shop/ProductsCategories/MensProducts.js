import React from "react";
import "./ProductsCategories.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopMensData } from "./ShopData";

const MensProducts = (props) => {
  return (
    <>
      <div className="products">
        {ShopMensData.map((shopmensdataval, index) => {
          return (
            <div className="img" key={index}>
              <div className="productimg">
                <img src={shopmensdataval.img} alt="products" />
              </div>
              <h1 className="name">{shopmensdataval.name}</h1>
              <div className="rating">{shopmensdataval.rating}</div>
              <div className="price">₹{shopmensdataval.price}
              <div className="addcart" onClick={() => props.addtocart(shopmensdataval, index)}>
                <p>Add to Cart</p>
                <ShoppingCartIcon style={{fontSize: '1.2rem'}}/>
              </div>
              </div>
              <Link to='/products' className="buybtn" onClick={() => props.BuyBtn(shopmensdataval, index)}>
                Buy Now
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MensProducts;
