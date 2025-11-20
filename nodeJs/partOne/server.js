const http = require("http")
const fs = require("fs")
const path = require("path")

// console.log(__dirname);

const port = 3000

const server = http.createServer((req, res) =>{
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url)
    const extName = String(path.extname(filePath)).toLowerCase()

    const mimeTypes = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'image/png',
    }

    const contentType = mimeTypes[extName] || 'application/octet-stream'

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { "Content-type": "text/html" });
                res.end("<h1>404: File not found</h1>");
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success!
            res.writeHead(200, { "Content-type": contentType });
            res.end(content, "utf-8");
    }
});
})
server.listen(port, ()=>{
    console.log(`The server is listining on port ${port}...`);
    
});

