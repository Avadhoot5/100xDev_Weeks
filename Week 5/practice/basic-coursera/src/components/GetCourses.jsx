import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useEffect } from 'react';

function GetCourses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
        try {
            const response = await fetch("http://localhost:3000/admin/courses", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Authorization")
                }
            })
            const data = await response.json();
            setCourses(data.courses);
        } catch (error) {
            console.log(error);
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
            paddingTop: 100,
            width: '50%',
            gap: 20
        }}>
        <div>
            <Typography variant='h6'>
                All Course
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
        <div>
            {courses.map(course => {
                return (<>
                <div key = {course.id}>
                    <div>
                        {course.title}
                    </div>
                </div>
                </>)
            })}
            <Button variant="contained"
            onClick={async () => {
            }}>Edit Course</Button>
        </div>
        </Card>
        </div>
    </>
  )
}

export default GetCourses;