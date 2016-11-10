var express = require('express');
var app = express();
var moment = require("moment");
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/:query', function(request, response) {
  var timestamp = request.params.query;
  var natural = moment.unix(parseInt(timestamp,10)).format('MMMM D YYYY');
  var result = { "unix": timestamp, "natural": natural };
  if (!isNaN(timestamp)){
      response.send(result);
      
  }
  
  
});