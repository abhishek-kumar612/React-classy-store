import React from 'react'
import './CartPage.css'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartData } from '../../../App';

const CartPage = (props) => {
  return (
    <>
    <div className = {`cartPage${props.cartActive}`}>
    <div className="cartCancel" onClick={props.cartPageHide}><DisabledByDefaultIcon style={{fontSize: '4rem'}}/></div>
    <button className="clearCart" onClick={props.clearAllCart}>Remove All</button>
    <div className="cartTotalPrice">SubTotal:- ₹{props.TotalCartPrice()}</div>
    {
      (CartData.length === 0) ? <div className='emptycartpage'></div> : CartData.map((cartval, index) =>{
        return(
          <div className="cartList" key={index}>
          <img src = {cartval.img} alt="cart" />
          <div className="details">
            <p className='name'>{cartval.name}</p>
            <p className='price'>{cartval.price}</p>
            <p className='rating'>{cartval.rating}</p>
            <button onClick={() => props.removesingle(index)}><DeleteIcon style={{fontSize: '1.3rem'}}/></button>
          </div>
        </div>
        )
      })
    }
    </div>      
    </>
  )
}

export default CartPage;