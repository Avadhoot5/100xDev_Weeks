import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function GetCourse() {
    console.log("Hi from Parent Getcourse");
    
    let {courseId} = useParams();
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
            setCourses(data.courses);
        })
    }, [])

    let course = null;
    courses.forEach((c) => {
        if (c.id === parseInt(courseId)) {
            course = c;
        }
    })

    if (!course) {
        return <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20
        }}>
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>
        </div>
    }

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
            <CourseCard course = {course}></CourseCard>
            <UpdateCard course = {course} courses = {courses} setCourses = {setCourses}></UpdateCard>
            </div>
        </div>
    )
}

export function UpdateCard(props) {
    console.log("Hi from UpdateCard");

    // update state variables
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const course = props.course;
    const courses = props.courses;

    return (
        <div>
            <Card variant="outlined" style = {{width: 400, padding:20}}>
            <Typography textAlign={"center"} variant="h5">Update Course Details</Typography>
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
                    fetch("http://localhost:3000/admin/courses/" + course.id, {
                        method: "PUT",
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
                        let updatedCourse = [];
                        courses.forEach((c) => {
                            if (c.id === course.id) {
                                updatedCourse.push({
                                    id: course.id,
                                    title: title,
                                    description: description,
                                    price: price,
                                    imageLink: image,
                                })
                            } else {
                                updatedCourse.push(courses.find((c) => c.id === course.id));
                            }
                        })
                        props.setCourses(updatedCourse);
                    })
                }}>Update Course</Button>
            </Card>
        </div>
    )
}

// function CourseCard(props) {
function CourseCard(props) {
    console.log("Hi from Coursecard");

    const course = props.course;
    return (
        <div style={{
            margin: 10
        }}>
            <Card style = {{
                margin: 10,
                minWidth: "auto",
                minHeight: 100
            }}>
                <Typography textAlign={"center"} variant="h5">{course.title}</Typography> 
                <Typography textAlign={"center"}>{course.description}</Typography> 
                <img src={course.imageLink} alt="image" style={{width: 300}}/>
            </Card>
        </div>
)}

export default GetCourse