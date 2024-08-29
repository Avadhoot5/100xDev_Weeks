import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './style/Signin.css';

const Signin = () => {
  return (
    <div>
        <Card className='main-card'>

        <Typography className='main-card-label'>
          Welcome Back. Signin below
        </Typography>
        <div className="user-pass">
            <TextField id="outlined-basic" label="Email" variant="outlined" type='email' />
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password'/>
            <Button className="signup-bttn" variant="contained">Sign in</Button>
        </div>
        
        </Card>
    </div>
  )
}

export default Signin