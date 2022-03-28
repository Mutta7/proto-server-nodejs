const routeResponseMap ={
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1><div>Say hello by emailing <a href='mailto: sample@contoso.com'>here</a></div>",
    "/aboutUs": "<h1>Learn more about us</h1>",
    "/error": "Sorry, the page you are looking for is not here.",
}

const port=3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
const getJsonString = obj => {
    return JSON.stringify(obj,null,2);
}

let defaultResponseMessage = `<h1>This will show on the screen.</h1>`

app.on("request", (req,res) =>{
    if(req.url =="/error"){
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.end(routeResponseMap[req.url]);
    } else if(routeResponseMap[req.url]){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(routeResponseMap[req.url]);
    } else {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(defaultResponseMessage)
    }
});

app.listen(port);
console.log(`The Server has started and is litening on port number: ${port}`);