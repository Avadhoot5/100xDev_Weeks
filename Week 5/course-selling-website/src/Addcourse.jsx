import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Addcourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    return ( <div>

        <div style = {{
            paddingTop: 70
        }}>
        <div style={{marginBottom: 10}}>
                <div style={{display: "flex",
                    justifyContent: "center"
                }}>
                <Typography variant='h5'>
                Add Courses Below
                </Typography>
                </div>
        </div>
        <div style={{display: "flex",
            justifyContent: "center"
        }}>
            <Card variant="outlined" style = {{width: 400, padding:20}}>
            <TextField fullWidth = {true} label="Title" variant="outlined"
            onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
            <TextField fullWidth = {true} label="Description" variant="outlined"
            onChange={(e) => setDescription(e.target.value)} />
                <br /> <br />
                <TextField fullWidth = {true} id="outlined-number" label="Price" type="number" variant="outlined"
                onChange={(e) => {setPrice(e.target.value)}}/>
                <br /> <br />
                <TextField fullWidth = {true} id="outlined" label="Image Link" variant="outlined"
                onChange={(e) => {setImage(e.target.value)}}/>
                <br /> <br />
                <Button size={"medium"} variant="contained"
                onClick={() => {
                    fetch("http://localhost:3000/admin/courses", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            price: price,
                            imageLink: image,
                            published: true
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem("token")
                        }
                    })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        // storing the data token in local storage
                        console.log(data);
                        alert("Course added!");
                    })
                }}>Add Course</Button>
            </Card>
        </div>
        </div>
    </div>
    )
}

export default Addcourse