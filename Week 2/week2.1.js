const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function sum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
      sum += i;
  }
  return sum;
}

app.get('/sum', (req, res) => {
  const counter = req.query.counter;
  res.send(`The sum of ${counter} is ${sum(counter)}`);
})

// basic http methods - put, post, delete 
// app.put('/putData', (req, res) => {
//   res.send('hello data is being added on the route');
// })

// app.post('/putData', (req, res) => {
//   res.send('Data is being updated on the same route');
// })

// app.delete('/putData', (req, res) => {
//   res.send("deleting the data");
// })

// handling many query params - the query params we receive from the client are converted into JSON format and sent back
app.get('/users/:userId/books/:bookId', (req, res) => {
  req.params = { "userId": `${req.params.userId}`, "bookId": `${req.params.bookId}` }
  res.send(req.params);
})

function createUser(req, res) {
  res.send("hello world");
}

// post
app.post('/createUser', createUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
