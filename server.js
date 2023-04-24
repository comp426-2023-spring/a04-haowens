#!/usr/bin/env node
import {rps, rpsls} from "./lib/rpsls.js";
const express = require('express');
const app = express();
const minimist = require('minimist');
const args = minimist(process.argv.slice(2)); 
const port = args["port"] || 5000;
app.listen(port);

//ALL endpoints should return HTTP headers including a status code and the appropriate content type for the response.
//Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined

//Check endpoint at /app/ that returns 200 OK.
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
})

//Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}. (HINT: regex)
app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.Stringify(rps()));
})

//Endpoint /app/rpsls/ that returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.Stringify(rpsls()));
})

//Endpoint /app/rps/play/ should accept request bodies in the following forms: shot=(rock|paper|scissors) (URLEncoded) or {"shot":"(rock|paper|scissors)"} (JSON) as data bodies and return {"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
app.get('/app/rps/play', () => {
    res.status(200).send(JSON.Stringify(rps(req.body.shot)));
})

//Endpoint /app/rpsls/play/ should accept request bodies in the following forms: shot=(rock|paper|scissors) (URLEncoded) or {"shot":"(rock|paper|scissors)"} (JSON) and return {"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
app.get('/app/rpsls/play', () => {
    res.status(200).send(JSON.Stringify(rpsls(req.body.shot)));
})


//Endpoint /app/rpsls/play/(rock|paper|scissors)/ should return {"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}

//Endpoint /app/rpsls/play/(rock|paper|scissors|lizard|spock)/ should return {"player":"(rock|paper|scissors|lizard|spock)","opponent":"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}