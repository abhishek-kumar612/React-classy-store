import React, { useState } from 'react'
import './ProductsPage.css'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const ProductsPage = (props) => {
    // document.title = props.ProductsPageName;
    let [imgslides, setimgslides] = useState(0);
    let [imgslidesActive1, setimgslidesActive1] = useState(true);
    let [imgslidesActive2, setimgslidesActive2] = useState(false);
    let [imgslidesActive3, setimgslidesActive3] = useState(false);
    let [imgslidesActive4, setimgslidesActive4] = useState(false);


    let imgSlideBtn1 = () =>{
      setimgslides(imgslides = 0);
      setimgslidesActive1(true);
      setimgslidesActive2(false);
      setimgslidesActive3(false);
      setimgslidesActive4(false);
    }
    
    let imgSlideBtn2 = () =>{
      setimgslides(imgslides = -100);
      setimgslidesActive2(true);
      setimgslidesActive1(false);
      setimgslidesActive3(false);
      setimgslidesActive4(false);
    }

    let imgSlideBtn3 = () =>{
      setimgslides(imgslides = -200);
      setimgslidesActive3(true);
      setimgslidesActive1(false);
      setimgslidesActive2(false);
      setimgslidesActive4(false);
    }
    let imgSlideBtn4 = () =>{
      setimgslides(imgslides = -300);
      setimgslidesActive4(true);
      setimgslidesActive1(false);
      setimgslidesActive2(false);
      setimgslidesActive3(false);
    }

    let ImagesSlides = {
      transform: `translateX(${imgslides}%)`,
    }

    let imgActive1 = imgslidesActive1 ? ' imgActive' : '';
    let imgActive2 = imgslidesActive2 ? ' imgActive' : '';
    let imgActive3 = imgslidesActive3 ? ' imgActive' : '';
    let imgActive4 = imgslidesActive4 ? ' imgActive' : '';

  return (
    <>
    <div className="ProductsPage">
      <div className="productsImagesGallery">
          <div className="imgslides">
            <img onMouseEnter = {imgSlideBtn1} className = {`${imgActive1}`} src = {props.ProductsPageImg} alt="images" />
            <img onMouseEnter = {imgSlideBtn2} className = {`${imgActive2}`} src = {props.ProductsPageImgs1} alt="images" />
            <img onMouseEnter = {imgSlideBtn3} className = {`${imgActive3}`} src = {props.ProductsPageImgs2} alt="images" />
            <img onMouseEnter = {imgSlideBtn4} className = {`${imgActive4}`} src = {props.ProductsPageImgs3} alt="images" />
          </div>
          <div className="img">
              <img style={ImagesSlides} src = {props.ProductsPageImg} alt="products" />
              <img style={ImagesSlides} src = {props.ProductsPageImgs1} alt="products" />
              <img style={ImagesSlides} src = {props.ProductsPageImgs2} alt="products" />
              <img style={ImagesSlides} src = {props.ProductsPageImgs3} alt="products" />
          </div>
      </div>
        <div className="details">
          <Link className='backbtn' to = "/shop/all"><ArrowBackIcon style={{fontSize: '2rem'}}/> All</Link>
          <h1 className='heading'>{props.ProductsPageName}</h1>
          <h1 className='rating'>{props.ProductsPageRating}</h1>
          <p className='price'>₹{props.ProductsPagePrice}
            <br /><span>inclusive of all taxes</span>
          </p>
          {/* <input type="number" placeholder="0" className='increaseNum'/> */}
          <h1 className='delivery_option'>DELIVERY OPTIONS
            <LocalShippingIcon style={{marginLeft: '7px', fontSize: '1.5rem'}}/>
          </h1>
          <form className="delivery_check">
            <input type="number" placeholder='Enter Pin Code' className='pincode' required/>
            <input type='submit' value='Check'/>
          </form>
          <p className='delivery_info'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
          {/* <h1 className="productsDetailsHeading">PRODUCT DETAILS
            <TextSnippetIcon style={{marginLeft: '7px', fontSize: '1.5rem'}}/>
          </h1> */}
          <ul className="productsInfo">
            <li>100% Original Products</li>
            <li>Cash on delivery available</li>
            <li>Easy 14 days returns and exchanges</li>
          </ul>
          <div className="bestOffersheading">
              <p>BEST OFFERS</p>
              <LocalOfferIcon style={{marginLeft: '7px', fontSize: '1.5rem'}}/>
          </div>
          <ul className="bestOffers">
              <li>Applicable on: Orders above Rs. 799 (only on first purchase)</li>
              <li>Coupon code: BONANZANEW</li>
              <li>Coupon Discount: Rs. 108 off (check cart for final savings)</li>
              <li>15% Instant Discount on AU Credit Cards</li>
              <li>10% Instant Discount on Punjab National Bank Credit Cards</li>
              <li>Flat Rs 150 Cashback for select users Or UpTo Rs 500 Cashback on CRED pay UPI transactions</li>
              <li>EMI option available</li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default ProductsPage;