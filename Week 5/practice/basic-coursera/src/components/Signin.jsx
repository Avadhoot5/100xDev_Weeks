import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';

function Signin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
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
        <TextField id="outlined-basic" label="Email" variant="outlined" 
        onChange={(e) => {
            setUsername(e.target.value);
        }} />
        <TextField id="outlined-password-input" 
            type="password" label="Password" variant="outlined" 
            onChange={(e) => {
                setPassword(e.target.value);
            }}/>
        <div>
            <Button variant="contained"
            onClick={async () => {
                try {
                    const response = await fetch("http://localhost:3000/admin/login", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            username, password
                        }
                    })
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    alert('Success');
                    window.location = "/"  
                } catch (error) {
                    console.log(error);
                }
            }}>Signin</Button>
        </div>
    </Card>
    </div>
    </>
    )
}

export default Signin;
