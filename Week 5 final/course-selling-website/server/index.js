const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/users", userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://avdootbhogil:O57HfQHZKe3PrlwO@cluster0.ldma88x.mongodb.net/courses')

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
