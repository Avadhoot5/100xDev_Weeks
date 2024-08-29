import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import "./style/Navbar.css"

const BASE_URL = 'http://localhost:3000/admin/me';

const NavBar = () => {

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch(BASE_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        })
        
        const data = await response.json();
        if (response.ok) {
          setUserEmail(data.username);
        }

      } catch(error) {
        console.log(error.message);
      }
    }
    init();
  },[])

  const handleLogout = () => {
    localStorage.setItem('token', null);
    navigate('/')
  }

  return (
    <div>
        <div className="nav">
            <div>
                <Link className="welcome" to='/'>Welcome to Coursera</Link>
            </div>
            {userEmail && 
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'}}>
              <div>{userEmail}</div>
              <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </div>}
            {!userEmail &&
              <div className="sign-bttn">
              <Button variant="contained" onClick={() => {navigate('/signin')}}>Sign In</Button>
              <Button variant="contained" onClick={() => {navigate('/signup')}}>Sign Up</Button>
              </div>
            }
        </div>
    </div>
  )
}

export default NavBar