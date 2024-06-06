import { useState,createContext } from 'react'
import {Card, CardContent, Button} from '@mui/material';
import { useContext } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

function App() {

  return (
    <>
    <RecoilRoot>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Card style = {{padding: 20, width: 500}}>
          Welcome to the counter game
          <br />
          <Buttons/>
          <CountComponent/>
        </Card>
      </div>
    </RecoilRoot>
    </>
  )
}

function Buttons() {
  return (
  <div style={{display: "flex", justifyContent: "space-between"}}>
    <Increase />
    <Decrease />
  </div>)
}

function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount((existingCount) => existingCount + 1);
      }
      }>Increase counter</Button>
    </div>
  )
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  
  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount((existingCount) => existingCount - 1);
      }
      }>Decrease counter</Button>
    </div>
  )
}
 
function CountComponent() {
  const count = useRecoilValue(countState);

  return (<div style = {{display: "flex", justifyContent: "center"}}>
    <h1>{count}</h1>
  </div>)
}

export default App

const countState = atom({
  key: 'countState', 
  default: 0,
});


// Context API - prevents Prop Drilling but re-render still happens
// const CountContext = createContext();

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <CountContext.Provider value = {{count, setCount}}>
//       <div style={{display: "flex", justifyContent: "center"}}>
//         <Card style = {{padding: 20, width: 500}}>
//           Welcome to the counter game
//           <br />
//           <Buttons count = {count} setCount = {setCount}/>
//           <CountComponent count = {count}/>
//         </Card>
//       </div>
//     </CountContext.Provider>
//     </>
//   )
// }

// function Buttons() {
//   return (
//   <div style={{display: "flex", justifyContent: "space-between"}}>
//     <Increase />
//     <Decrease />
//   </div>)
// }

// function Increase() {
//   const {count, setCount} = useContext(CountContext);
//   return (
//     <div>
//       <Button variant={"contained"} onClick={() => {
//         setCount((count+1))
//       }
//       }>Increase counter</Button>
//     </div>
//   )
// }

// function Decrease() {
//   const {count, setCount} = useContext(CountContext);
//   return (
//     <div>
//       <Button variant={"contained"} onClick={() => {
//         setCount((count-1))
//       }
//       }>Decrease counter</Button>
//     </div>
//   )
// }
 
// function CountComponent() {
//   const {count} = useContext(CountContext);
//   return (<div style = {{display: "flex", justifyContent: "center"}}>
//     <h1>{count}</h1>
//   </div>)
// }

// export default App

// Prop Drilling Example below - passing props from parent -> child -> grandchild - grandchild

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div style={{display: "flex", justifyContent: "center"}}>

//       <Card style = {{padding: 20, width: 500}}>
//         Welcome to the counter game
//         <br />
//         <Buttons count = {count} setCount = {setCount}/>
//         <CountComponent count = {count}/>
//       </Card>
//     </div>
//     </>
//   )
// }

// function Buttons({count, setCount}) {
//   return (
//   <div style={{display: "flex", justifyContent: "space-between"}}>
//     <Increase count = {count} setCount = {setCount} />
//     <Decrease count = {count} setCount = {setCount}/>
//   </div>)
// }

// function Increase({count, setCount}) {
//   return (
//     <div>
//       <Button variant={"contained"} onClick={() => {
//         setCount((count+1))
//       }
//       }>Increase counter</Button>
//     </div>
//   )
// }

// function Decrease({count, setCount}) {
//   return (
//     <div>
//       <Button variant={"contained"} onClick={() => {
//         setCount((count-1))
//       }
//       }>Decrease counter</Button>
//     </div>
//   )
// }
 
// function CountComponent(props) {
//   return (<div style = {{display: "flex", justifyContent: "center"}}>
//     <h1>{props.count}</h1>
//   </div>)
// }

// export default App
