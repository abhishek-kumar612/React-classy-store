import React from "react";
import "./ProductsCategories.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopWomensData } from "./ShopData";

const WomenProducts = (props) => {
  return (
    <>
      <div className="products">
        {ShopWomensData.map((shopwomensdataval, index) => {
          return (
            <div className="img" key={index}>
              <div className="productimg">
                <img src={shopwomensdataval.img} alt="products" />
              </div>
              <h1 className="name">{shopwomensdataval.name}</h1>
              <div className="rating">{shopwomensdataval.rating}</div>
              <div className="price">₹{shopwomensdataval.price}
              <div className="addcart" onClick={() => props.addtocart(shopwomensdataval, index)}>
                <p>Add to Cart</p>
                <ShoppingCartIcon style={{fontSize: '1.2rem'}}/>
              </div>
              </div>
              <Link to='/products' className="buybtn" onClick={() => props.BuyBtn(shopwomensdataval, index)}>
                Buy Now
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WomenProducts;
