import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Appbar from "./components/Appbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <div style={{
      height: '100vh',
      width: '100vw',
      background: "#e9e9e9",
    }}>
      <Router>
        <Appbar/>
        <Routes>
          <Route path="/signin" element={<Signin/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}


export default App;
