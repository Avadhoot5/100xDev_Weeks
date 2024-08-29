require('dotenv').config();
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

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening on port once connection build
    app.listen(3000, () => {
      console.log("Connected to DB");
      console.log("listening on port", 3000);
    });
  })
  .catch((err) => console.log(err));

