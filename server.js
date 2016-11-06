var express = require('express');
 
var app = express();
var PORT = process.env.PORT || 8080;
 
app.get('/:time', function(request, response) {
  var timestamp = request.params.time;
  
  response.send('Timestamp: ' + timestamp);
});
 
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});

