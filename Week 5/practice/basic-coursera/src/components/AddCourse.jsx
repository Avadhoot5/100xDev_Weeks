import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';


function AddCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

  return (
    <>
    <div style={{
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        margin: '0 auto',
        paddingTop: 100,
        width: '50%',
        gap: 20
    }}>
    <div>
        <Typography variant='h6'>
            Add Course
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
        <TextField id="outlined-basic" label="Title" variant="outlined" 
        onChange={(e) => {
            setTitle(e.target.value);
        }} />

        <TextField id="outlined-basic" label="Description" variant="outlined" 
        onChange={(e) => {
            setDescription(e.target.value);
        }} />

        <TextField id="outlined-number" label="Price" type="number" variant="outlined" 
        onChange={(e) => {
            setPrice(e.target.value);
        }} />

        <TextField id="outlined-basic" label="Image Link" variant="outlined" 
        onChange={(e) => {
            setImage(e.target.value);
        }} />

        <div>
            <Button variant="contained"
            onClick={async () => {
                try {
                    const response = await fetch("http://localhost:3000/admin/courses", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem("Authorization")
                        },
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            price: price,
                            imageLink: image,
                            published: true
                        })
                    })
                    const data = await response.json();
                    alert(data.message + " ID: " + data.courseId);
                } catch (error) {
                    console.log(error);
                }
            }}>Add Course</Button>
        </div>
    </Card>
    </div>
    </>
  )
}

export default AddCourse;