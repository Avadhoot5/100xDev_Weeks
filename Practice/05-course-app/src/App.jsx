import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Landing from './components/Landing'
import Courses from './components/Courses'
import Course from './components/Course'
import AddCourse from './components/AddCourse'

function App() {

  return (
    <>
      <div>
        <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/courses' element={<Courses/>}></Route>
            <Route path='/course' element={<Course/>}></Route>
            <Route path='/addcourse' element={<AddCourse/>}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
