const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);


server.listen(PORT, function () {
    console.log("server is listening on PORT: " + PORT);
})

function handleRequest(req, res) {
    const path = req.url;
    console.log(__dirname);

    switch (path) {
        case "/framework":
            return fs.readFile(__dirname + "/framework.html", 'utf8', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
         
        case "/food":
           return  fs.readFile(__dirname + "/index.html", 'utf8', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);

            });
          
            case "/movie":
             return   fs.readFile(__dirname + "/movie.html", 'utf8', function (err, data) {
                    if (err) throw err;
                    res.writeHead(200, { "Content-Type": "text/html" })
                    res.end(data);
    
                });
            
        default:
          return  fs.readFile(__dirname + "/index.html", 'utf8', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
        }
    }