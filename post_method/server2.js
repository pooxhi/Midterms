var express = require("express");
var app = express();

var bodyParser = require ("body-parser");

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req,res) {
    res.sendFile (__dirname + "/" + "index.html");
});

app.post("/post_method", urlencodedParser, function (req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})