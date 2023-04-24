#!/usr/bin/env node
import {rps, rpsls} from "./lib/rpsls.js";
const express = require('express');
const app = express();

// const http = require("http"); 
// const fs = require("fs");

const minimist = require('minimist');
const args = minimist(process.argv.slice(2)); 
const port = args["port"] || 5000;
app.listen(port);


app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
})


const host = 'localhost';

fs.readFile('./public/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  http.createServer(function (req, res)  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
    console.log(`Server listening on port ${port}`);
  }).listen(port);
});