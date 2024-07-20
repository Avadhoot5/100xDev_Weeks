import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';

function Signup() {
    
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

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
            Welcome to Coursera! Signup Below
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
                    const response = await fetch("http://localhost:3000/admin/signup", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username, password
                        })
                    })
                    const data = await response.json();
                    alert(data.message);
                } catch (error) {
                    console.log(error);
                }
            }}
            >Signup</Button>
        </div>
    </Card>
    </div>
    </>
    )
}

export default Signup;
