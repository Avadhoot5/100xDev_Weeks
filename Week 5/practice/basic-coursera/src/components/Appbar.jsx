import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Appbar() {

  

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
        <Button variant="contained">Signup</Button>
      </Link>
        </div>
    </div>
  )
}



export default Appbar;
