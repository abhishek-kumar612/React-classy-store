import React, { useState } from 'react'
import './Login.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  let [showpassword, setshowpassword] = useState(false)
  let [showpasswordicon, setshowpasswordicon] = useState(false)

  let showPassword = () =>{
    setshowpassword(!showpassword)
    setshowpasswordicon(!showpasswordicon)
  }

  let showPasswordActive = showpassword ? 'text' : 'password';
  let showPasswordiconActive = showpasswordicon ? 
          <VisibilityOffIcon style={{fontSize: '1.7rem'}}/> : 
          <VisibilityIcon style={{fontSize: '1.7rem'}}/>;

  return (
    <>
    <div className="loginbkg">
        <div className="loginpage">
          <form className="login">
            <h1 className='loginheading'>Login</h1>
            <label>Email Address</label>
            <div className="input"><input type="email" placeholder='Email' required/></div>
            <label>Password</label>
            <div className="input"><input type={`${showPasswordActive}`} placeholder='Password' required/>
              <div className="showHide" onClick={showPassword}>{showPasswordiconActive}</div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id='check'/>
              <label htmlFor="check">Remember Me</label>
            </div>
            <input type="submit" value="Login" />
          </form>
          <div className="loginimg">
            <img src={require('../images/loginpageimg1.jpg')} alt="login" />
            <img src={require('../images/loginpageimg2.jpg')} alt="login" />
          </div>
        </div>
    </div>
    </>
  )
}

export default Login;