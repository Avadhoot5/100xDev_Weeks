const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});  
})

app.get('/calculateSum', (req, res) => {
    let value = parseInt(req.query.counter);
    let sum = ((value) * (value + 1))/2;
    res.json({message: 'Sum is ' + sum});
})

app.get('/calculateSum/:value', (req, res) => {
    let value = parseInt(req.params.value);
    let sum = ((value) * (value + 1))/2;
    res.json({message: 'Sum is ' + sum});
})

// Post request - Headers

app.post('/valueHeader', (req, res) => {
    const value = req.headers.value;
    res.json({message: 'You posted this value through headers:' + value})
})

// Post request - body

app.post('/valueBody', (req, res) => {
    const {value} = req.body;
    res.json({message: 'Value read through body is: ' + value});
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
