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

//Check endpoint at /app/ that returns 200 OK.
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
})

//Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}. (HINT: regex)
app.get('/app/rps', (req, res) => {
    res.send(rps());
})

//Endpoint /app/rpsls/ that returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rps', (req, res) => {
    res.send(rpsls());
})

//Endpoint /app/rps/play/ should accept request bodies in the following forms: shot=(rock|paper|scissors) (URLEncoded) or {"shot":"(rock|paper|scissors)"} (JSON) as data bodies and return {"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
app.get('/app/rps/play', () => {

})

//Endpoint /app/rpsls/play/ should accept request bodies in the following forms: shot=(rock|paper|scissors) (URLEncoded) or {"shot":"(rock|paper|scissors)"} (JSON) and return {"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}

