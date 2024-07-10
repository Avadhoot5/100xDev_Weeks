
const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');
const cors = require('cors');
// const { todo } = require("node:test");

app.use(express.json());
app.use(cors());

// get test route
app.get('/', (req, res) => {
  res.send("Hello world");
})


app.get('/todos', (req, res) => {
  fs.readFile("data.js", "UTF-8", (err, data) => {
    if (err) {
      console.log("file not read");
    } else {
      let todos = JSON.parse(data);
      res.status(200).json(todos);
    }
  })
})

app.get('/todos/:id', (req, res) => {
  let todoId = Number(req.params.id);
  fs.readFile("data.js", "UTF-8", (err, data) => {
    if (err) {
      console.log("file not read");
    }
    let todos = JSON.parse(data);
    const todo = todos.filter((todo) => todo.id === todoId);
    if (!todo) {
      res.send("todo ID not found");
    }
    res.status(200).json(todo);
  })
})

app.post('/todos', (req, res) => {
  let id = new Date().getTime();
  console.log(req.body);
  const {title, description} = req.body;
  let todoDetails = {
    id,
    title,
    description
  }
  fs.readFile("data.js", "UTF-8", (err, data) => {
    if (err) {
      console.log("file not read");
    }
    let todos = JSON.parse(data);
    todos.push(todoDetails);
    fs.writeFile("data.js", JSON.stringify(todos), "UTF-8", (err => {
      if (err) throw err;
      res.status(201).json({"id": todoDetails.id});
    }))
  })
})

app.put('/todos/:id', (req, res) => {
  let todoId = Number(req.params.id);
  const {title, description} = req.body;
  fs.readFile("data.js", "UTF-8", (err, data) => {
    if (err) {
      console.log("file not read");
    }
    let todos = JSON.parse(data);
    let todoIndex = todos.findIndex((a) => a.id === todoId);
    if (todoIndex === -1) res.status(404).send("todo not found");
    let updatedToDo = {
      id: todoId,
      title,
      description
    }
    todos[todoIndex] = updatedToDo;
    fs.writeFile('data.js', JSON.stringify(todos), "UTF-8", (err => {
      if (err) throw err;
      res.status(200).json("todo item was found and updated");
    }))
  })
})

// 5. DELETE /todos/:id - Delete a todo item by ID
// Description: Deletes a todo item identified by its ID.
// Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
// Example: DELETE http://localhost:3000/todos/123

app.delete('/todos/:id', (req, res) => {
  let todoId = Number(req.params.id);
  fs.readFile("data.js", "UTF-8", (err, data) => {
    if (err) {
      console.log("file not read");
    }
    let todos = JSON.parse(data);
    let todoIndex = todos.findIndex((a) => a.id === todoId);
    if (todoIndex === -1) res.status(404).send("todo not found");
    let newTodo =  todos.filter((a) => a.id !== todoId);
    fs.writeFile('data.js', JSON.stringify(newTodo), "UTF-8", (err => {
      if (err) throw err;
      res.status(200).json("todo item was found and deleted");
    }))
  })
})


app.listen(port, () => {
  console.log(`App listening on ${port}`);
})