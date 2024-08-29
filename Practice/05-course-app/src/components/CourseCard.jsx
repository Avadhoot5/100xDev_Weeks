import './style/CourseCard.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CourseCard = ({course}) => {

  return (
    <div>
        <Card className='course-main-card'>
            <div className='title-desc'>
                <Typography className='title-desc'>{course.title}</Typography>
                <Typography className='title-desc'>{course.description}</Typography>
            </div>
            <div>
                <img className='course-img' src={course.imageLink} alt="course-image" />
                <div>
                <Button className="edit-course" variant="contained">Edit Course</Button>
                </div>
            </div>
          </Card>

    </div>
  )
}

export default CourseCard
