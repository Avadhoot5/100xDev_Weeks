import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CourseCard from './GetCourseAllLogic';

function Course() {
    console.log("hi from independent course");

    let {courseId} = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses/" + courseId, {
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
            setCourse(data.courses);
        })
    }, [])

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
            <CourseCard course = {course}></CourseCard>            
        </div>
    )
}

export default Course