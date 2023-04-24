const http = require("http"); 
const fs = require("fs");

const minimist = require('minimist');
const args = minimist(process.argv.slice()); 
const port = args["port"] || 5000;

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