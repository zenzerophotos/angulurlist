var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();
//     express = require('express')();
//     server = require('http').createServer(express);
//     io = require('socket.io')(server);
// io.on('connection', function(){ /* … */ });
      // io = require('socket.io').listen(server);
      //
      var io = require('socket.io')();
      io.on('connection', function(socket){
        console.log('working')
      });


server.use(logger);
server.use(express.static(__dirname+'/public'));


server.get('/', function(req,res){
  res.sendFile('public/html/index.html',{root: __dirname});
});

// io.sockets.on("connection",function(){
//   console.log('working')
// })


server.listen(8080,function(){
  console.log('port 8080 running'+8080);
});
