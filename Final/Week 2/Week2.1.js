// HTTP server

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function sum(n) {
    return (n*(n+1))/2;
}

// using query params

app.get('/sum', (req, res) => {
    const n = Number(req.query.count);
    const ans = sum(n);
    res.status(200).json(`Query params sum from 1 to ${n} is ${ans}`);
})

// app.get('/fn', (req, res) => {
//     const ans = (10*(10+1))/2;
//     res.send(`The sum from 1 to 10 is ${ans}`)
// })

// using headers

app.get('/headSum', (req, res) => {
    const n = Number(req.headers.counter);
    const ans = sum(n);
    res.status(200).json(`Headers sum from 1 to ${n} is ${ans}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


