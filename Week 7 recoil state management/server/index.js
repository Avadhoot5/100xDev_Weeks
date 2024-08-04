const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const dotenv = require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" })
.then(() => console.log("connected to database"))
.catch(() => console.log("Not connected to database"))

app.listen(3000, () => console.log('Server running on port 3000'));
