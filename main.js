var http = require("http");

http.createServer(function(req,res) {

    res.end("<h1>Hello World in node js</h1>\n");
}).listen(4000);
console.log("serever is started at http://127.0.0.1:4000/")



