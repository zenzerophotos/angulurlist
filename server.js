var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();
      // io = require('socket.io').listen(server);
      //
    

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
