const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config");
const loginRoute = require("./routes/login");
const verifyRoute = require("./routes/verify");


const app = express();
app.set('port', PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/login', loginRoute);
app.use('/verify', verifyRoute);

function onListening() {
    console.log(`Running on ${app.get('port')}`);
}

app.listen(process.env.PORT, onListening);