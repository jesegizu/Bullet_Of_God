var express = require('express')
var app = express(),
num=0 ,
player=[];
arriba=[];
abajo=[];
izq=[];
der=[];
servidor = require("http").createServer(app)
io = require("socket.io").listen(servidor);
servidor.listen(4000);
app.use(express.static(__dirname+'/'))
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
io.sockets.on("connection", function (socket) {
	updateAllClients();
    socket.on("id",function(txtMen){
        socket.emit("num",num)
        num=num+1;
    });
    
    socket.on("PlayerPosition", function (obj) {        
        if(player.length==0){
            player.push(obj);
        }
        else{
            for(var i=0;i<player.length;i++){
                if(player[i].id==obj.id){
                    player[i]=obj;
                    return;
                } 
            }
            player.push(obj);
        }   
    });
    
    socket.on("arriba",function(dato){
           arriba.push(dato);
  
    });

    socket.on("abajo",function(datoa){
     abajo.push(datoa);
    });


     socket.on("izq",function(datob){
     izq.push(datob);
    });


    socket.on("der",function(datoc){
      der.push(datoc);
    });
    function updateAllClients() {
        socket.emit("JugadorDibujado", player);
        for(var i=0,l=arriba.length;i<l;i++){
             	arriba[i].y-=20;
                 if(arriba[i].y<0){
                   arriba.splice(i--,1); l--;
                 }
             } 

        socket.emit("a",arriba);
         for(var i=0,l=abajo.length;i<l;i++){
             	 abajo[i].y+=20;
                 if(abajo[i].y<0){
                   abajo.splice(i--,1); l--;
                 }
             } 
        socket.emit("b",abajo);


          for(var i=0,l=der.length;i<l;i++){
             	 der[i].x+=20;
                 if(der[i].x<0){
                   der.splice(i--,1); l--;
                 }
             } 
             socket.emit("c",der);
          
            for(var i=0,l=izq.length;i<l;i++){
             	 izq[i].x-=20;
                 if(izq[i].x<0){
                   izq.splice(i--,1); l--;
                 }
             } 
             socket.emit("d",izq);

        setTimeout(updateAllClients, 50);
    }    
    
    socket.on("eliminar", function (z) {
        for(var i=0;i<player.length;i++){
            if(player[i].id==z){
                player.splice(i,1);
                return;
            }
        }
    });
});