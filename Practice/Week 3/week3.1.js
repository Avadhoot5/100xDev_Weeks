
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());

// Get all todos
app.get('/todos', (req, res) => {
  fs.readFile('data.json', 'UTF-8', (err, data) => {
    if (err) console.log('not able to read file');
    return res.status(200).json(JSON.parse(data));
  });
});

// Get todo with particular ID
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile('data.json', 'UTF-8', (err, data) => {
    if (err) console.log('not able to read file');
    const todos = JSON.parse(data);
    const todo = todos.find((a) => a.id === id);
    if (todo) {
      return res.status(200).json(todo);
    } else {
      return res.status(404).json({message: 'No todo present with such id'});
    }
  });
})

// post todo
app.post('/todos', (req, res) => {
  const {title, description} = req.body;
  const id = new Date().getTime();

  fs.readFile('data.json', 'UTF-8', (err, data) => {
    if (err) console.log('file not found');
    const todos = JSON.parse(data);
    const todo = {
      title, description, id
    }
    todos.push(todo);
    res.status(201).json({id: id});
    fs.writeFile('data.json', JSON.stringify(todos), 'UTF-8', (err, data) => {
      if (data) return;
    })
  })
})

// post todo
app.put('/todos/:id', (req, res) => {
  const {title, description} = req.body;
  const id = parseInt(req.params.id);

  fs.readFile('data.json', 'UTF-8', (err, data) => {
    if (err) console.log('file not found');
    const todos = JSON.parse(data);
    const todoIndex = todos.findIndex((a) => a.id === id);
    if (todoIndex < 0) return res.status(404).json({message: 'Todo ID not found'});
    const updatedTodo = {
      title, description, id
    }
    todos[todoIndex] = updatedTodo; 
    res.status(200).json({message: 'todo item was updated'})
    fs.writeFile('data.json', JSON.stringify(todos), 'UTF-8', (err, data) => {
      if (data) return;
    })
  })
})

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile('data.json', 'UTF-8', (err, data) => {
    const todos = JSON.parse(data);
    const todoIndex = todos.find((a) => a.id === id);

    if (!todoIndex) return res.status(400).json({message: 'Todo ID not found'});

    const filterTodo = todos.filter((a) => a.id !== id);
    if (filterTodo) res.status(200).json({message: 'Todo item deleted'});

    fs.writeFile('data.json', JSON.stringify(filterTodo), 'UTF-8', (err, data) => {
      if (data) return;
    })

  })
})

app.listen(PORT,() => {
  console.log(`App listening on port ${PORT}`)
});
