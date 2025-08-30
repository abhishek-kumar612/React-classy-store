import React from 'react'
import './Contact.css'
import contact from '../images/contactus.jpg'

const Contact = () => {
  return (
    <>
    <div className="contactus">
        <img src={contact} alt="contactus" />
        <h1>Contact Us <br />Let's get in Touch</h1>
    </div>
    <form className="contactpage">
        <li><label>Name</label><input type="text" placeholder='Name' required/></li>
        <li><label>Email</label><input type="email" placeholder='Email' required/></li>
        <li><label>Message</label><textarea cols="30" rows="10" placeholder='Message......'></textarea></li>
        <input type="submit" value="Send"/>
    </form>
    </>
  )
}

export default Contact;