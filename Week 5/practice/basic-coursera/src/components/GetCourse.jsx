import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { atom } from 'recoil';

function GetCourse() {

    const {courseId} = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
        try {
            const response = await fetch(`http://localhost:3000/admin/courses/${courseId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            })
            const data = await response.json();
            setCourse(data.courses);
        } catch (error) {
            console.log("course not found");
        }
    }
    fetchCourse();
    }, [])


  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        margin: 10,
        padding: 10
    }}>
        <CourseCard title={course.title} description={course.description} imageLink={course.imageLink}></CourseCard>
        <UpdateCard id={parseInt(courseId)} setCourse={setCourse}></UpdateCard>
    </div>
  )
}

function CourseCard({title, description, imageLink}) {
    return (
    <div className='courseContainer'>
            <Card variant="outlined" style={{
                border: '2px solid black',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: 5
            }}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='subtitle'>{description}</Typography>
            <div >
                <img style={{width: 250, height: 250}} src={imageLink} />
            </div>
            </Card>
        </div>
)
}

function UpdateCard({id, setCourse}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");


    return (<>
    <div style={{width: '400px'}}>

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
                    const response = await fetch(`http://localhost:3000/admin/courses/${id}`, {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem("token")
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
                    if (data.message) {
                        setCourse((prev) => ({
                            ...prev,
                            title,
                            description,
                            price,
                            imageLink: image,
                            published: true
                        }))
                    } else {
                        console.log("course not updated");
                    }
                } catch (error) {
                    console.log('Course NOT updated');
                }
            }}>Update Course</Button>
        </div>
    </Card>
    </div>

    </>)
}

export default GetCourse;
