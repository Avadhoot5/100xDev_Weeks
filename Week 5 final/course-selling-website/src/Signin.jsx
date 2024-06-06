import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useState, React } from 'react';
import axios from 'axios';

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div style = {{
            paddingTop: 100
        }}>
        <div style={{marginBottom: 10}}>
                <div style={{display: "flex",
                    justifyContent: "center"
                }}>
                <Typography variant='h5'>
                Welcome Back! Sign in below
                </Typography>
                </div>
        </div>
        <div style={{display: "flex",
            justifyContent: "center"
        }}>
            <Card variant="outlined" style = {{width: 400, padding:20}}>
            <TextField fullWidth = {true} label="Username" variant="outlined" 
            onChange={(e) => setEmail(e.target.value)}/>
                <br /><br />
            <TextField fullWidth = {true} label="Password" variant="outlined" type={"password"} 
            onChange={(e) => setPassword(e.target.value)}/>
                <br /> <br />
                <Button size={"medium"} variant="contained" 
                onClick={async () => {
                    const response = await axios.post("http://localhost:3000/admin/login", {
                        username: email,
                        password: password
                    })
                    let data = response.data;
                    localStorage.setItem("token", data.token);
                    window.location = "/"
                }}
                >Sign In</Button>
            </Card>
        </div>
        </div>
    )
}

export default Signin