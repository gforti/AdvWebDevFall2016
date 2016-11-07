
var request = require('request');



module.exports.homePage = function(req, res) {
        
    var requestOptions = {
          url : 'http://localhost:3001/api/v1/reviews',
          method : "GET",
          json : {},
          qs : {}
        };
        
  request( requestOptions, function(err, response, body) {
      var results = [];
      if (response.statusCode === 200 && body.length) {
        results = (body instanceof Array) ? body : [];        
      }
      
      res.render('index', {
            title: 'Home Page',
            results: results
        });
      
    }
  );
    
   
};