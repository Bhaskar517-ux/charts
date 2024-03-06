var express=require('express');
var server=express();
server.use(express.static(__dirname +'/app'));
//server.use(express.static(__dirname +'/angularchart'));
server.use(express.static(__dirname +''));
//server.use(express.static(__dirname+ "/js"));


var port=5000;
server.listen(port,function(){
    console.log('Server ')
})
