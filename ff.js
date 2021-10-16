var request = require('request');
var url ='http://requestbin.net/r/fhtk74ne'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});

