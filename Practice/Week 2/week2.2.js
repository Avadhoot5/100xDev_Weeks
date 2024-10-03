const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());

let counter = 0;
app.use((req, res, next) => {
    counter++;
    console.log(`Number of requests: ${counter}`);
    next();
})

app.get('/', (req, res) => {
    res.json({message: 'Hello user'});
})

// Post request - Headers

// app.post('/valueHeader', (req, res) => {
//     const value = req.headers.value;
//     res.json({message: 'You posted this value through headers:' + value})
// })

// Post request - body

app.post('/valueBody', (req, res) => {
    const {value} = req.body;
    res.json({message: 'Value read through body is: ' + value});
})

app.post('/math', (req, res) => {
    const value = parseInt(req.body.value);
    let sum = ((value) * (value + 1))/2;
    let mul = 1;
    for (let i = 1; i <= value; i++) {
        mul *= i;
    }
    
    res.status(200).json({Sum: sum, Multiply: mul});
})

app.get('/home', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
})

app.listen(PORT, () => {
    console.log(`App Listening on PORT ${PORT}`);
})

