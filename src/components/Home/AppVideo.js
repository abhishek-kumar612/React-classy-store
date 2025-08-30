import React, { useEffect, useState } from 'react'
import "./Products.css";
import { WebsiteInfo } from './ProductsData';
import { HomeGrid } from './ProductsData';
import { NavLink } from 'react-router-dom';

const AppVideo = () => {
  let [accessoriesbanner, setaccessoriesbanner] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      console.clear()
      console.log((window.pageYOffset).toFixed());
      if(window.pageYOffset >= 2800){
        setaccessoriesbanner(true);
      }
      else{
        setaccessoriesbanner(false);
      }
    })
  }, []);

  let accessoriesbannerActive = accessoriesbanner ? ' accessoriesbannerActive' : '';
  return (
    <>
    <div className = {`accessoriesoffers${accessoriesbannerActive}`}>
        <img src={require("../images/aceessoriesoffers.jpg")} alt="offers" />
        <h1>Up to 70% Off on All Accessories</h1>
        <NavLink to="/shop/accessories">Explore More</NavLink>
    </div>

    <div className="homeGrid">
      {
        HomeGrid.map((homegridval, index) =>{
          return(
              <div className="grid" key={index}>
                <img src={homegridval.img} alt="home" />
                  <div className="links">
                    <h1 style={{color: `${homegridval.color}`}}>{homegridval.heading}</h1>
                    <p style={{color: `${homegridval.color}`}}>{homegridval.para}</p>
                    <NavLink to = {homegridval.link}>Shop Now</NavLink>
                  </div>
              </div>
          )
        })
      }
    </div>
    <h1 className='appvideoheading'><span>Download</span> Our App</h1>
    <div className="appvideo">
        <video src={require("../images/appvideo.mp4")} autoPlay loop muted></video>
    </div>
    <div className="websiteinfo">
        {
            WebsiteInfo.map((websiteinfoval, index) =>{
                return (
                  <div className="info" key={index}>
                    <img src={websiteinfoval.img} alt="info" />
                    <p>{websiteinfoval.heading}</p>
                  </div>
                );
            })
        }
    </div>
    </>
  )
}

export default AppVideo;