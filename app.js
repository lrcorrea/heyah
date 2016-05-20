var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	nicknames = [];

server.listen((process.env.PORT || 3000), function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});