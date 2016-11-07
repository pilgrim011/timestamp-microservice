var express = require('express');
var app = express();
var moment = require("moment");
var PORT = process.env.PORT || 8080;

 
app.get('/:query', function(request, response) {
  var timestamp = request.params.query;
  var natural = moment.unix(parseInt(timestamp,10)).format('MMMM D YYYY');
  var result = { "unix": timestamp, "natural": natural };
  if (!isNaN(timestamp)){
      response.send(result);
      
  }
  
  
});
 
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});

