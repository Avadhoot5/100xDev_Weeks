import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style/Signin.css';
import { useState } from 'react';

const BASE_URL = 'http://localhost:3000/admin/signup';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
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
        console.log("User created success");
        console.log(data);

        //set the token in local storage
        localStorage.setItem('token', JSON.stringify(data.token)); 
      }

      if (!response.ok) {
        setError(error);
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
          Welcome to Coursera. Signup below
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
            <Button onClick = {(e) => handleSignup(e)} className="signup-bttn" variant="contained">Sign up</Button>
            {error && <div>{error}</div>}
        </div>

        </Card>
    </div>
  )
}

export default Signup