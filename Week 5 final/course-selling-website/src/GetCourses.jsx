import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GetCourses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/admin/courses", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((res) => {
            setCourses(res.data);
            console.log(res.data);
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
                    return <Courselist course = {course}> </Courselist>
                })}
        </div>
    )
}

// Object destructuring
function Courselist({course}) {
    
    const navigate = useNavigate();

    return <div>
            <Card style = {{
                margin: 10,
                minWidth: "auto",
                minHeight: 200,
            }}>
                <Typography textAlign={"center"} variant="h5">{course.title}</Typography> 
                <Typography textAlign={"center"}>{course.description}</Typography> 
                <img src={course.imageLink} alt="image" style={{width: 300}}/>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 5, marginBottom: 5}}>
                <Button variant="contained"
                        onClick={() => {
                            navigate("/course/" + course._id);
                        }}>Edit</Button>
                        </div>
            </Card>
    </div>
}

export default GetCourses