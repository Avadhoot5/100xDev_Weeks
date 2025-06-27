// express - headers and body

const express = require('express')
const app = express()
const port = 3000

// Use built-in Express middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let ctr = 1;
app.use((req, res, next) => {
    console.log('Incoming request: ', ctr);
    ctr++;
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function addition(n) {
    return (n*(n+1))/2;
}

function mul(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
    return result;
}

app.post('/sum', (req, res) => {
    const counter = Number(req.body.counter);
    if (counter < 10000) {
        const calculatedSum = addition(counter);
        const calculatedMul = mul(counter);
        const ans = {
            sum: calculatedSum,
            mul: calculatedMul
        }
        res.status(200).json(ans);
    } else {
        res.status(411).send('You have sent very big number');
    }
})

app.post('/display', (req, res) => {
    const {age, name} = req.body;
    const ans = `${name} is of age ${age}`;
    res.status(200).json(ans);
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

