const port=3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
const getJsonString = obj => {
    return JSON.stringify(obj,null,2);
}

app.on("request", (req,res) =>{
    var body = [];
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });
    req.on("end", ()=> {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });

    console.log(`Method : ${getJsonString(req.method)}`);
    console.log(`URL : ${getJsonString(req.url)}`);
    console.log(`Headers : ${getJsonString(req.headers)}`);

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    let responseMessage = `<h1>This will show on the screen.</h1>`
    res.end(responseMessage);
});

app.listen(port);
console.log(`The Server has started and is litening on port number: ${port}`);