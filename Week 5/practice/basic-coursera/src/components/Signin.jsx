import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';

function Signin() {
    
    return (
    <>
    <div style={{
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        margin: '0 auto',
        paddingTop: 150,
        width: '50%',
        gap: 20
    }}>
    <div>
        <Typography variant='h6'>
            Welcome Back
        </Typography>
    </div>
    <Card variant="outlined" style={{
        border: '2px solid black',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        width: '100%'
    }}>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-password-input" 
            type="password" label="Password" variant="outlined" />
        <div>
            <Button variant="contained">Signin</Button>
        </div>
    </Card>
    </div>
    </>
    )
}

export default Signin;
