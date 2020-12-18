const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
//const { response } = require('express');
const stripe = require("stripe")("sk_test_51HzmHQI3pvAPJEPt49QPtHywCj1brMsBkj4OEdDSgeBYNG4DYesY1XlnXucVoX8KbkAAaHm8PnaVqvIlJnh1MiGo00WDaWlxCG")

//API

//App config 
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json);

//api routes
//app.get('/',(request, response) => response.status(200).send("Hello world"))
app.get("/", (request, response) => response.status(200).send("hello world"));

//listen command
exports.api = functions.https.onRequest(app)