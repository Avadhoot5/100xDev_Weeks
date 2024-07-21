import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Appbar() {

  const [userEmail, setUserEmail] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAdmin = async () => {
      try {
        const response =  await fetch('http://localhost:3000/admin/me', {
          method: "GET",
          headers: {
            'Authorization': 'Bearer '+ localStorage.getItem("token")
        }
        })
        const data = await response.json();
        setUserEmail(data.email);
        setLoading(false);
      } catch (error) {
        console.log("admin not verified");
      }
    }
    getAdmin();
  }, [])

  loading = <div>
    Loading....
  </div>


  if (userEmail) {
    return (
      <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10
      }}>
      <div>
          <Typography variant='h6'>Coursera</Typography>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10
      }}>
        <div>
          {userEmail}
        </div>
          <Button variant="contained" 
          onClick={() => {
            localStorage.setItem('token', null);
            window.location = "/"  
          }} >Logout</Button>
          </div>
      </div>
    )
  } else {
    return (
      <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10
      }}>
      <div>
          <Typography variant='h6'>Coursera</Typography>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,

      }}>
        <Link to='/signup'>
          <Button variant="contained">Signup</Button>
        </Link>
        <Link to='/signin'>
          <Button variant="contained">Signin</Button>
        </Link>
          </div>
      </div>
    )
  }
}



export default Appbar;
