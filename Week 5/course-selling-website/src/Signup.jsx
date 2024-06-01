import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return ( <div>

        <div style = {{
            paddingTop: 100
        }}>
        <div style={{marginBottom: 10}}>
                <div style={{display: "flex",
                    justifyContent: "center"
                }}>
                <Typography variant='h5'>
                Welcome to our Website! Signup below
                </Typography>
                </div>
        </div>
        <div style={{display: "flex",
            justifyContent: "center"
        }}>
            <Card variant="outlined" style = {{width: 400, padding:20}}>
            <TextField fullWidth = {true} label="Username" variant="outlined"
            onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
            <TextField fullWidth = {true} label="Password" variant="outlined" type={"password"}
            onChange={(e) => setPassword(e.target.value)} />
                <br /> <br />
                <Button size={"medium"} variant="contained"
                onClick={() => {
                    fetch("http://localhost:3000/admin/signup", {
                        method: "POST",
                        body: JSON.stringify({
                            username: email,
                            password: password
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        // storing the data token in local storage
                        localStorage.setItem("token", data.token);
                        window.location = "/"
                    })
                }}>Sign Up</Button>
            </Card>
        </div>
        </div>
    </div>
    )
}

export default Signup