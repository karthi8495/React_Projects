const http = require("http");
require("dotenv").config();

const port = process.env.PORT || 1337;

const server = http.createServer(function (req, res) {
    if (req.url === "/"){
        respondText(req,res);
    } else if (req.url === "/json") {
        respondJson(req,res);
    } else {
        respondNotFound(req,res);
    }
       
});

function respondText(req, res) {
   res.setHeader("Content-Type","text/plain");
   res.end("Hi");
}

function respondJson(req, res) {
   res.setHeader("Content-Type","application/json");
   res.end(JSON.stringify({
        text: 'hi', courses:["node","react","angular"] }));
}

function respondNotFound(req,res) {
    res.writeHead(404, {"Content-Type":"text/plain"});
    res.end("Not Found");
}

server.listen(port);
console.log(`Server running at http://localhost:${port}`);