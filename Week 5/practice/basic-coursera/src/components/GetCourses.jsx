import { redirect, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useEffect } from 'react';

function GetCourses() {

    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
        try {
            const response = await fetch("http://localhost:3000/admin/courses", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            })
            const data = await response.json();
            setCourses(data.courses);
        } catch (error) {
            console.log("course not found");
        }
    }
    fetchCourse();
    }, [])


  return (
    <>
    <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            margin: '0 auto',
            gap: 20
        }}>
        <Typography variant='h6'>
            All Courses
        </Typography>
    </div>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20
    }}>
        {courses.map((course) => {
            return <Course title={course.title} description={course.description}
            id = {course.id} image={course.imageLink}></Course>
        })}
    </div>
    </>
  )
}

function Course({title, description, image, id, navigate}) {
    return (
    <div>
        <Card variant="outlined" style={{
            border: '2px solid black',
            padding: 20,
            display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 5
        }}>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='subtitle'>{description}</Typography>
        <div >
            <img style={{width: 250, height: 250}} src={image} />
        </div>
        <Button variant='contained' onClick={() => redirect(`/getcourse/${id}`)}>Edit Course</Button>
        </Card>
    </div>
)
}


export default GetCourses;