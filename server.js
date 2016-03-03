var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();

server.use(logger);
server.use(express.static(__dirname+'/public'));


server.get('/', function(req,res){
  res.sendFile('public/html/index.html',{root: __dirname});
});

server.listen(8080,function(){
  console.log('port 8080 running'+8080);
});
