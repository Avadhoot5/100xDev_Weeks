import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useResetRecoilState,
    useSetRecoilState,
  } from 'recoil';


function GetCourse() {
    console.log("hi from getcourse");

    let {courseId} = useParams();

    // const [courses, setCourses] = useState([]);
    const setCourses = useSetRecoilState(coursesState);

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


    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
            <CourseCard courseId = {courseId}></CourseCard>
            <UpdateCard courseId = {courseId}></UpdateCard>
            </div>
        </div>
    )
}

function CourseCard(props) {
    console.log("hi from courseCard");

    const courses = useRecoilValue(coursesState);

    let course = null;
    courses.forEach((c) => {
        if (c.id === parseInt(props.courseId)) {
            course = c;
        }
    })

    if (!course) {
        return <div>
            Loading....
        </div>
    }

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

function UpdateCard(props) {
    console.log("hi from updateCard");

    // update state variables
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const courseId = parseInt(props.courseId);
    const [courses, setCourses] = useRecoilState(coursesState);

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
                    fetch("http://localhost:3000/admin/courses/" + courseId, {
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
                            if (c.id === courseId) {
                                updatedCourse.push({
                                    id: courseId,
                                    title: title,
                                    description: description,
                                    price: price,
                                    imageLink: image,
                                })
                            } else {
                                updatedCourse.push(courses.find((c) => c.id === courseId));
                            }
                        })
                        setCourses(updatedCourse);
                    })
                }}>Update Course</Button>
            </Card>
        </div>
    )
}


export default GetCourse

const coursesState = atom({
    key: 'coursesState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
