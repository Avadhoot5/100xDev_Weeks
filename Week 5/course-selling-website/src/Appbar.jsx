import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Appbar() {

    const [userEmail, setuserEmail] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data) {
                console.log(data);
                setuserEmail(data.email);
            }
        })
    }, [])

    if (userEmail) {
        return (
            <div style = {{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div>
                <Typography variant={"h6"}>Coursera</Typography>
                </div>
                <div style = {{
                    display: "flex",
                }}>
                    {userEmail}
                    <div style={{marginLeft: 5, marginRight: 10}}>
                        <Button variant="contained" 
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/"
                        }}>Logout</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style = {{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div>
            <Typography variant={"h6"}>Coursera</Typography>
            </div>
            <div style = {{
                display: "flex",
                }}>
                <div style={{marginRight: 10}}>
                    <Button variant="contained" 
                    onClick={() => {
                        navigate("/signup")
                    }}>Sign Up</Button>
                </div>
                <div>
                    <Button variant="contained" 
                    onClick={() => {
                        navigate("/signin")
                    }}>Sign in</Button>
                </div>
            </div>
        </div>
    )
}

export default Appbar