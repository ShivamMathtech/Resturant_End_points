const express = require("express");
const app = express();
const env = require("dotenv").config();

const port = process.env.PORT_NO || 300;
app.listen(port);
