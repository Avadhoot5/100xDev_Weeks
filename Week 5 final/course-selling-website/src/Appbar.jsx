import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Appbar() {

    const [userEmail, setuserEmail] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/admin/me", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((res) => {
            setuserEmail(res.data.username);
        })
    }, [])


    if (userEmail) {
        return (
            <div style = {{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 5
            }}>
                <div>
                <Typography variant={"h6"}>Coursera</Typography>
                </div>
                <div style = {{
                    display: "flex",
                }}>

                <Button variant="text" onClick={() => {navigate('/addcourse')}}>Add Courses</Button>
                <Button variant="text" onClick={() => {navigate('/getcourses')}}>Courses</Button>
                    <div style={{marginLeft: 10, marginRight: 10}}>
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