import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';
import Addcourse from './Addcourse';
import GetCourses from './GetCourses';
import GetCourse from './GetCourseAllLogic';
import Course from './Course';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

  return (
    <>
    <div style={{
      // width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee",
    }}>
      <RecoilRoot>
      <Router>
      <Appbar></Appbar>
        <Routes>
          <Route path="/getcourses" element={<GetCourses/>}></Route>
          {/* <Route path="/getcourse/:courseId" element={<GetCourse/>}></Route> */}
          <Route path="/course/:courseId" element={<Course/>}></Route>
          <Route path="/addcourse" element={<Addcourse/>}></Route>
          <Route path="/signin" element={<Signin/>} ></Route>
          <Route path="/signup" element={<Signup/>} ></Route>
        </Routes>
      </Router>
      </RecoilRoot>
    {/* <Signup></Signup> */}
    {/* <Signin></Signin> */}
    </div>
    </>
  )
}

export default App
