import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Appbar from "./components/Appbar"
import AddCourse from "./components/AddCourse"
import GetCourses from "./components/GetCourses"
import GetCourse from "./components/GetCourse"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      height: '100vh',
      width: '100wv',
      background: "#e9e9e9"
    }}>
      <RecoilRoot>
        <Router>
          <Appbar/>
          <Routes>
            <Route path="/addcourse" element={<AddCourse/>}></Route>
            <Route path="/getcourses/:courseId" element={<GetCourse/>}></Route>
            <Route path="/getcourses" element={<GetCourses/>}></Route>
            <Route path="/signin" element={<Signin/>}> </Route>
            <Route path="/signup" element={<Signup/>}> </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
    </>
  )
}


export default App;
