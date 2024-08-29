import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const BASE_URL = 'http://localhost:3000/admin/courses';

const AddCourse = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imageLink, setImageLink] = useState('');

    const handleCourse = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, price, imageLink, published: true})
        })

        if (response.ok) {
          const data = await response.json();
          alert(data.message);
        }

      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
        <Card className='main-card'>
          <Typography className='main-card-label'>
            Add Course
          </Typography>
          <div className="user-pass">
            <TextField onChange={(e) => {
              setTitle(e.target.value);
            }}
            value = {title}
            required id="outlined-basic" label="Title" variant="outlined" type='text' />

            <TextField onChange={(e) => {
              setDescription(e.target.value);
            }}
            value = {description}
            required id="outlined-basic" label="Description" variant="outlined" type='text' />

            <TextField onChange={(e) => {
              setPrice(e.target.value);
            }}
            value = {price}
            required id="outlined-basic" label="Price" variant="outlined" type='number' />

            <TextField onChange={(e) => {
              setImageLink(e.target.value);
            }}
            value = {imageLink}
            required id="outlined-basic" label="Image" variant="outlined" type='text' />
              
            <Button onClick={(e) => handleCourse(e)} className="signup-bttn" variant="contained">Add Course</Button>
          </div>
          </Card>
    </div>
  )
}

export default AddCourse