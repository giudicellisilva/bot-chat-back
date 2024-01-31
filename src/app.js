const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cx-chat.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

const index = require("./routes/index");
const personRoute = require('./routes/personRoute');
const pergunta = require("./routes/pergunta")

app.use("/", index);
app.use("/persons", personRoute);
app.use("/", pergunta);

module.exports = app;