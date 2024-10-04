
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

app.listen(PORT,() => {
  console.log(`App listening on port ${PORT}`)
});
