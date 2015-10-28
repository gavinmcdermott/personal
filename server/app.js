var express         = require('express');
var livereload      = require('livereload');
var path            = require('path');
var favicon         = require('serve-favicon');

var app = express();

// Top level paths
var staticFolder = path.resolve(__dirname, '../client');
var indexPath = path.resolve(__dirname, '../client/index.html');

// 
var careerFolder = path.resolve(__dirname, '../client/app/career');
var cvPath = path.resolve(__dirname, careerFolder, 'cv.html');
var statementPath = path.resolve(__dirname, careerFolder, 'statement.html');





app.use(express.static(staticFolder));

app.get('/', function (req, res) {
  res.sendFile(indexPath);
});

app.get('/cv', function (req, res) {
  res.sendFile(cvPath);
});

app.get('/why', function (req, res) {
  res.sendFile(statementPath);
});



app.listen(3000, function () {
  var host = this.address().address;
  var port = this.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});




// TODO:
// gulp, livereload, build process
// http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/