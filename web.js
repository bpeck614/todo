var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(app.router);


app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  var data = buf.toString('utf-8');
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
