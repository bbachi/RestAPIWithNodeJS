var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');
var request = require('request');






var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var restRouter = express.Router();

app.use('/api',restRouter);

restRouter.route('/test').get(function(req,res){
    
  request('http://api.sba.gov/geodata/county_links_for_state_of/ca.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
         res.json(body);
    }
  });
});


restRouter.route('/data').post(function(req,res){
    
    console.log("post data:::"+req.body.data);
   var response = {"test":"sucesfull"};
    res.json(req.body.data);
    
});





app.use(express.static('public'));
app.use(express.static('node_modules'));



app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
    