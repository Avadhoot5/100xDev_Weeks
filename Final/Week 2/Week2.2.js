// express - headers and body

const express = require('express')
const app = express()
const port = 3000

// Use built-in Express middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function sum(n) {
    return (n*(n+1))/2;
}

app.get('/sum', (req, res) => {
    const counter = Number(req.body.counter);
    const ans = sum(counter);
    res.status(200).json(`from Body the sum from 1 to ${counter} is ${ans}`);
})

app.post('/display', (req, res) => {
    const {age, name} = req.body;
    const ans = `${name} is of age ${age}`;
    res.status(200).json(ans);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

