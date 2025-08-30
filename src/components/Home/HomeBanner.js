import React, { useState } from 'react'
import './HomeBanner.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, Outlet } from 'react-router-dom';

const HomeBanner = () => {
    let [bannerlink, setbannerlink] = useState(0);
    let [bannerheading, setbannerheading] = useState(0);
    let [slide, setslide] = useState(0);

    let nextSlide = () =>{
        setbannerlink(bannerlink + 1);
        setbannerheading(bannerheading + 1);
        if(bannerlink === BannerData.length - 1 && bannerheading === BannerData.length - 1){
            setbannerlink(0);
            setbannerheading(0);   
        }

        setslide(slide -= 1);
        if(slide === -(BannerData.length)){
            setslide(0);
        }
    }

    let prevSlide = () =>{
        setbannerlink(bannerlink - 1);
        setbannerheading(bannerheading - 1);
        if(bannerlink === 0 && bannerheading === 0){
            setbannerlink(BannerData.length - 1);
            setbannerheading(BannerData.length - 1);   
        }
        
        setslide(slide += 1);
        if(slide === 1){
            setslide(-(BannerData.length - 1));
        }
    }

    let slides = {
        transform: `translateY(${slide * 100}%)`,
    }

  return (
    <>
    <div className="banner">
        {
            BannerData.map((bannervalue, index) =>{
                return(
                    <div className="img" style={slides} key={index}>
                        <img src={bannervalue.img} alt="banner" />
                    </div>
                )
            })
        }
        <div className="bannerContent">
            <h1>{BannerData[bannerheading].heading}</h1>
            <NavLink className = 'buybtn' to = {BannerData[bannerlink].link}>Shop Now</NavLink>
        </div>
        <div className="nextSlide" onClick={nextSlide}><ArrowForwardIosIcon style={{fontSize: '4rem'}}/></div>
        <div className="prevSlide" onClick={prevSlide}><ArrowBackIosIcon style={{fontSize: '4rem'}}/></div>
    </div>
    <Outlet/>
    </>
  )
}

export default HomeBanner;

let BannerData = [
    {
        img: require('../images/bannermen2.png'),
        heading: 'Mens Collection',
        link: '/shop/men',
    },
    {
        img: require('../images/bannergirl.png'),
        heading: 'Womens Collection',
        link: '/shop/women',
    },
    {
        img: require('../images/bannerwatch.png'),
        heading: 'Accessories',
        link: '/shop/accessories',
    },
];