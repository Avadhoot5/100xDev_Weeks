const express = require('express')
const bodyParser = require('body-parser'); // bodyParser is external library which parses the body into json object, since express by default does not support the conversion
const app = express()
const port = 3001

app.use(bodyParser.json());


function sum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
      sum += i;
  }
  return sum;
}

app.post('/sum', (req, res) => {
  let counter = req.body.counter;
  console.log("Received counter:" + counter);
  let ansObj = {
    sum: sum(counter)
  }
  res.send(ansObj);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// html document send
// app.get('/page', (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// })

// app.get('/page', (req, res) => {
//   res.render("index");
// })

// Status code example - 
// app.post('/sum', (req, res) => {
//   console.log(req.body);
//   let counter = req.body.counter;
//   if (counter < 1000000000) {
//     res.send(`The sum of ${counter} is ${sum(counter)}`);
//   } else {
//     res.status(411).send("You have provided a very huge number");
//   }
// })


// let noOfRequest = 0;
// // Middlewares - always place the middleware before your 1st route
// app.use('/', (req, res, next) => {
//   noOfRequest += 1;
//   console.log(`Number of requests till now: ${noOfRequest}`); 
//   console.log(`Middleware: ${req.headers.counter}`);
//   next();

//   // if (req.headers.counter.length > 0) => If (true) next else error;
//   //   else 
//   //  res.send("Error from inside middleware"); 
// })

//  SENDING DATA USING QUERY PARAMS, AND HEADERS - NOT USED MUCh 
// app.get('/sum', (req, res) => {
//   const counter = req.query.counter;
//   res.send(`The sum of ${counter} is ${sum(counter)}`);
// })

// sending data using headers
// app.post('/sum', (req, res) => {
//   console.log(req.headers.counter);
//   const counter = req.headers.counter;
//   res.send(`The sum of ${counter} is ${sum(counter)}`);
// })
