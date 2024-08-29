import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

const BASE_URL = 'http://localhost:3000/admin/courses';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                setLoading(true);
                const response = await fetch(BASE_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })

                const data = await response.json();
                if (response.ok) {
                    setCourses(data)
                }
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }
        init();
    }, [])

  return (
    <div>
        {loading && 
        <div style={{display: 'flex', justifyContent:'center'}}>
            Loading...
        </div>}
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
        }}>
            {courses && courses.map((course) => {
                return (<CourseCard key={course._id} course = {course}/>)
            })}
        </div>
    </div>
  )
}

export default Courses