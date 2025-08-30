import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="newsletter">
        <div className="emailupdates">
            <h1>Sign Up for more Updates</h1>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
        </div>
        <form className="signupinput">
            <input type="email" placeholder='Your Email' required/>
            <input type="submit" value="Sign Up"/>
        </form>
    </div>
    <footer>
        <div className="socialmedia">
            <a href='#' title='Instagram' style={{"--clr": '#E1306C'}} className="icons"><InstagramIcon style={{fontSize: '1.8rem'}}/></a>
            <a href='#' title='Facebook' style={{"--clr": '#4267B2'}} className="icons"><FacebookIcon style={{fontSize: '1.8rem'}}/></a>
            <a href='#' title='Youtube' style={{"--clr": '#ff0000'}} className="icons"><YouTubeIcon style={{fontSize: '1.8rem'}}/></a>
        </div>
        <div className="footermain">
            <div className="footer">
                <h1>CATEGORIES</h1>
                <NavLink to="/shop/men">Men</NavLink>
                <NavLink to="/shop/women">Women</NavLink>
                <NavLink to="/shop/accessories">Accessories</NavLink>
            </div>
            <div className="footer">
                <h1>MY ACCOUNT</h1>
                <a href="#">Track Orders</a>
                <a href="#">Returns</a>
                <a href="#">Shipping</a>
                <NavLink to="/contact">Help</NavLink>
            </div>
            <div className="footer">
                <h1>CONTACT</h1>
                <p>Address: <span>562 Wellington Road, Street 32, San Francisco</span></p>
                <p>Phone: <span>+01 2222 365</span></p>
                <p>Hours: <span>10:00AM to 11:00PM</span></p>
                <p>Days: <span>Monday to Friday</span></p>
            </div>
        </div>
        <div className="cards">
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp" alt="cards" />
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp" alt="cards" />
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp" alt="cards" />
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp" alt="cards" />
        </div>
        <div className="copyright">Copyright ©2023 All rights reserved</div>
    </footer>
    </>
  )
}

export default Footer;