const express = require('express');
const app = express();
const PORT = 3000;

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
    console.log(`App Listening on PORT ${PORT}`);
})

