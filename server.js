var express = require('express');
var app = express();
var moment = require("moment");
var path = require('path');
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.get('/:query', function(request, response) {
  var timestamp = request.params.query;
  
  if (moment.unix(Number(timestamp)).isValid()){
    console.log("unix");
  var naturalTime = moment.unix(Number(timestamp)).format('MMMM D, YYYY');
  var unixTime = timestamp;
  
  var result = { "unix": parseInt(unixTime,10), "natural": naturalTime };
  
      response.send(result);
      
  
  }
  else if (moment(timestamp).isValid()){
    console.log("string");
  naturalTime = moment(timestamp).format('MMMM D, YYYY');
  unixTime = Number(new Date(timestamp).getTime() / 1000).toFixed(0);
  
  result = { "unix": parseInt(unixTime,10), "natural": naturalTime };
  
      response.send(result);
      
  
  }
  
  else if (moment.unix(parseInt(timestamp,10)).isValid()==false && moment(timestamp).isValid()==false){
    console.log("nulaaa!");
    response.send("null");
  }
 
  
});
 
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});

