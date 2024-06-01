import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function GetCourses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data.courses);
            setCourses(data.courses);
        })
    }, [])

    return (
        // use MUI Grid 
        <div style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        }}>
                {courses.map((course) => {
                    return <Courselist title = {course.title} description = {course.description} image = {course.imageLink}> </Courselist>
                })}
        </div>
    )
}

function Courselist(props) {
    return <div>
            <Card style = {{
                margin: 10,
                minWidth: "auto",
                minHeight: 100
            }}>
                <Typography textAlign={"center"} variant="h5">{props.title}</Typography> 
                <Typography textAlign={"center"}>{props.description}</Typography> 
                <img src={props.image} alt="image" style={{width: 300}}/>
            </Card>
    </div>
}

export default GetCourses