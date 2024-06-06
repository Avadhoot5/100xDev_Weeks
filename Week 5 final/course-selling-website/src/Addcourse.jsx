import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';

function Addcourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

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
                onClick={async () => {
                    await axios.post("http://localhost:3000/admin/courses", {
                        title: title,
                        description: description,
                        price: price,
                        imageLink: image,
                        published: true,
                    }, {
                        headers: { 
                            'Authorization': 'Bearer ' + localStorage.getItem("token")
                        } 
                    }).then((res) => {
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