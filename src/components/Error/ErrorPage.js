import React from 'react'
import './ErrorPage.css'
import Errorpage from '../images/oops.png'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div className="errorpage">
        <img src={Errorpage} alt="errorpage" />
        <h1>404 Page Not Found</h1>
        <NavLink to = '/' className='homepage'>Go to Homepage</NavLink>
    </div>
    </>
  )
}

export default ErrorPage;