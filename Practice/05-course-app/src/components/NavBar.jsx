import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import "./style/Navbar.css"

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div>
        <div className="nav">
            <div>
                <Link className="welcome" to='/'>Welcome to Coursera</Link>
            </div>
            <div className="sign-bttn">
             <Button variant="contained" onClick={() => {navigate('/signin')}}>Sign In</Button>
             <Button variant="contained" onClick={() => {navigate('/signup')}}>Sign Up</Button>
            </div>
        </div>
    </div>
  )
}

export default NavBar