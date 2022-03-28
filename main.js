const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
}

const port=3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plainTextContentType ={
        "Content-Type": "text/plain"
    },
    htmlContentType ={
        "Content-Type": "text/html"
    };

const customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if(errors){
            console.log("Error reading the file...");
        }
        res.end(data);
    })
}

router.get("/", (req, res)=>{
    res.writeHead(httpStatus.OK,plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res)=>{
    res.writeHead(httpStatus.OK,htmlContentType);
    customReadFile("views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("POSTED");
    console.log("posted!!");
})

http.createServer(router.handle).listen(port);

console.log(`The Server has started and is litening on port number: ${port}`);


