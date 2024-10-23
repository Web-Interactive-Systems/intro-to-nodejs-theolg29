const { writeFileSync } = require("fs");
const http = require("http");
const fs = require("fs");
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
// Array.from({ length: 100000 }, (_, i) => {
//   writeFileSync(__dirname + "/utils/big.txt", `This will be a big text file ${i}\n`, {
//     flag: "a",
//   }); // flag: "a" for appending
// });

// Todo create an http server
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`<p>Hello World</p> <a href="/dashboard">Dashboard></a>`);
    }   
    if (req.url === "/dashboard") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('<h1>Dashboard</h1><a href="/">back home</a>');
    }

     if (req.url) === "/big.html") {
       const content = fs.readFileSync('./src/utils/big.txt');
       res.end(content);

       const stream = fs.createReadStream('./src/utils/big.txt');
       stream.pipe(res);
       
       stream.on("data", (data) => {
        console.log("Data", data);
       })

       res.pipe();

     }

 });

 server.listen(3000, () => {
   console.log('Server running at <http://localhost:3000/>');
 });


// Todo: serve text to the client.

// Todo: What's the problem?

// Todo: use `createReadStream` to file stream to serve text to the client.
