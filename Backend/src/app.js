const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.use(express.json());

const authrouter = require("./routes/authroutes")

app.use('/api/auth',authrouter)





module.exports = app
