Avar express = require('express');

var fs = require('fs');
var infile = "index.html";
var contentBuf = fs.readFileSync(infile);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(contentBuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
