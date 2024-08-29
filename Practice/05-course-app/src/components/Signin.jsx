import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './style/Signin.css';

const BASE_URL = 'http://localhost:3000/admin/login';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })

      const data = await response.json();

      if (response.ok) {
        setLoading(false);

        //set the token in local storage
        localStorage.setItem('token', data.token); 
      }

      if (!response.ok) {
        setError(data.message);

      }
    }
    catch (error) {
      setError(error);
    }
  }

  return (
    <div>
        <Card className='main-card'>
          <Typography className='main-card-label'>
            Welcome Back. Sigin below
          </Typography>
          <div className="user-pass">
              <TextField onChange={(e) => {
                setEmail(e.target.value);
              }}
              value = {email}
              required id="outlined-basic" label="Email" variant="outlined" type='email' />
              <TextField onChange={(e) => {
                setPassword(e.target.value);
              }}
              value = {password}
              required id="outlined-basic" label="Password" variant="outlined" type='password'/>
              <Button onClick = {(e) => handleSignin(e)} className="signup-bttn" variant="contained">Sign in</Button>
              {error && <div>{error}</div>}
          </div>
          </Card>
    </div>
  )
}

export default Signin
