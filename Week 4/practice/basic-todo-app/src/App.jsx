import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import Nav from './components/Nav';
import styled from 'styled-components';

function App() {

  let [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodo = async () =>{
      try {
        const response = await fetch("http://localhost:3000/todos/");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log("not found");
      }
    }
    getTodo();
  }, [])

  return (
    <>
    <Container>
      <Nav></Nav>
      {todos.map((todo) => {
        return (<div key={todo.id}>
          <Todo title={todo.title} description={todo.description} id={todo.id}></Todo>
        </div>)
      })}
    </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: black;
  color: white;
    


`

export default App
