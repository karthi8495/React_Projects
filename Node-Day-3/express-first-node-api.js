const express = require("express");
require("dotenv").config()

const port = process.env.PORT || 1337;

const app = express();

app.get("/home",respondText);
app.get("/json",respondJson);
app.get('/',respondNotFound);

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});