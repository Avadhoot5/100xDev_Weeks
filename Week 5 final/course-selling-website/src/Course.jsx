import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import Grid from '@mui/material/Grid';

// Need to update this - add card, update course Card.Beautify using MUI

function Course() {
    console.log("hi from independent course");

    let {courseId} = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/admin/course/" + courseId, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((res) => {
            setCourse(res.data.course);
        })
    }, [])

    if (!course) {
        // If course not found returning Loading screen
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
            <GrayTopper title = {course.title}/>
            <Grid container>
                <Grid item lg = {7} md = {12} sm = {12}>
                    <UpdateCard course = {course} setCourse = {setCourse}></UpdateCard>
                </Grid>
                <Grid item lg = {5} md = {12} sm = {12}>
                    <CourseCard course = {course}></CourseCard>
                </Grid>
            </Grid>
        </div>
    )
}

function GrayTopper({title}) {
    return (
        <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
            <div style={{height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>{title}</Typography>
            </div>
        </div>
)
}

function UpdateCard({course, setCourse}) {
    console.log("Hi from UpdateCard");

    // update state variables
    const [title, setTitle] = useState(course.title);
    const [description, setDescription] = useState(course.description);
    const [price, setPrice] = useState(course.price);
    const [image, setImage] = useState(course.imageLink);

    return (
        <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant="outlined" style = {{maxWidth: 600, marginTop: 175}}>
            <div style = {{padding: 20}}>
            <Typography textAlign={"center"} variant="h5">Update Course Details</Typography>
            <TextField value = {title} fullWidth = {true} variant="outlined"
            onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
            <TextField value = {description} fullWidth = {true} variant="outlined"
            onChange={(e) => setDescription(e.target.value)} />
                <br /> <br />
                <TextField value = {price} fullWidth = {true} id="outlined-number" type="number" variant="outlined"
                onChange={(e) => {setPrice(e.target.value)}}/>
                <br /> <br />
                <TextField value = {image} fullWidth = {true} id="outlined"  variant="outlined"
                onChange={(e) => {setImage(e.target.value)}}/>
                <br /> <br />
                
                <Button size={"medium"} variant="contained"
                onClick={() => {
                    axios.put("http://localhost:3000/admin/courses/" + course._id, {
                        title: title,
                        description: description,
                        price: price,
                        imageLink: image,
                        published: true
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem("token")
                        }
                    })
                    let updatedCourse = {
                        title: title,
                        description: description,
                        price: price,
                        imageLink: image
                    }
                    setCourse(updatedCourse);
                }}>Update Course</Button>
            </div>
            </Card>
        </div>
        </>
    )
}

function CourseCard({course}) {
    console.log("Hi from Coursecard");

    return (
        <div style={{
            display: "flex", marginTop: 50, justifyContent: "center", }}>
            <Card style = {{
                margin: 10,
                width: 300,
                minHeight: 200,
                borderRadius: 20,
                marginRight: 10,
                paddingBottom: 15,
                zIndex: 2
            }}>
                <img src={course.imageLink} style={{width: 300}}/>
                <div style={{marginLeft: 10}}>
                    <Typography variant="h5">{course.title}</Typography>
                    <Typography variant="subtitle2" style={{color: "gray"}}>
                        Price
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Rs {course.price} </b>
                    </Typography>
                </div>
            </Card>
        </div>
)}


export default Course