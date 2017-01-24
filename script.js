var tecla=null;
var enemigo=[];
var xxx=[];
var aaa=[];
var ddd=[];
var bbb=[];
var num=null;
var con=0;
var gameover = true;
var ctx = null;
var canvas = null;
var PosXOther;
var PosYOther;
var KEY_LEFT=37; 
var KEY_UP=38; 
var KEY_RIGHT=39; 
var KEY_DOWN=40; 
var KEY_SPACE=32;
var pressing=[]; 
var Numero = Math.floor(Math.random()*2);
var prueba=[];
var arriba=[];
var abajo=[];
var izq=[];
var der=[];
var lastPress=null; 
var jugador=null;
var player=[],
canvaswidth = 300, 
canvasheight = 150, 
worldWidth = 0, 
worldHeight = 0, 
cam = null, 
wall = [], 
lava = [], 
map0 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ]; 

$(document).on("ready", function () {
    var socket = io.connect();
    var txtMen = $("#txtMensaje");
    socket.emit("id", txtMen);
   
    if(Numero==1){
      var color = "#0f0";
    }
    if(Numero==0){
      var color="yellow"    	
    }   
    
    function init() { 
        canvas = document.getElementById('canvas'); 
        ctx = canvas.getContext('2d'); 
        canvas.width = canvaswidth; 
        canvas.height =canvasheight; 
        worldWidth = canvas.width; 
        worldHeight = canvas.height; 
        jugador = new Rectangle2D(200, 200, 20, 20, true); 
        cam = new Camera(); 
        setMap(map0, 20); 
        run();
        repaint();
    }
    
    socket.on("num",function(data){
    	if(num==null)
        num=data;   
    });

    function Camera() { 
        this.x = 0; 
        this.y = 0; 
    } 
    
    Camera.prototype = { 
        constructor: Camera, 
        focus: function (x, y) { 
            this.x = x - canvas.width / 2; 
            this.y = y - canvas.height / 2; 
            if (this.x < 0) { 
                this.x = 0; 
            } 
            else 
                if (this.x > worldWidth - canvas.width) { 
                    this.x = worldWidth - canvas.width; 
                } 
                if (this.y < 0) { 
                    this.y = 0; 
                } 
            else 
                if (this.y > worldHeight - canvas.height) { 
                    this.y = worldHeight - canvas.height; 
                } 
        } 
    }; 
    
    function Rectangle2D(x, y, width, height, createFromTopLeft) { 
        this.width = (width === undefined) ? 0 : width; this.height = (height === undefined) ? this.width : height; 
        if (createFromTopLeft) { 
            this.left = (x === undefined) ? 0 : x; 
            this.top = (y === undefined) ? 0 : y; 
        } 
        else { 
            this.x = (x === undefined) ? 0 : x; 
            this.y = (y === undefined) ? 0 : y; 
        } 
    } 
    
    Rectangle2D.prototype = { 
        constructor: Rectangle2D, 
        left: 0, 
        top: 0, 
        width: 0, 
        height: 0, 
        get x() { 
            return this.left + this.width / 2; 
        }, set x(value) { 
            this.left = value - this.width / 2; 
        }, get y() { 
            return this.top + this.height / 2; 
        }, set y(value) { 
            this.top = value - this.height / 2; 
        }, get right() { 
            return this.left + this.width; 
        }, set right(value) { 
            this.left = value - this.width; 
        }, get bottom() { 
            return this.top + this.height; 
        }, set bottom(value) { 
            this.top = value - this.height; 
        }, intersects: function (rect) { 
            if (rect !== undefined) { 
                return (this.left < rect.right && this.right > rect.left && this.top < rect.bottom && this.bottom > rect.top); 
            } 
        }, fill: function (ctx) { 
            if (ctx !== undefined) { 
                if (cam !== undefined) { 
                    ctx.fillRect(this.left - cam.x, this.top - cam.y, this.width, this.height); 
                } 
                else { 
                    ctx.fillRect(this.left, this.top, this.width, this.height); 
                } 
            } 
        } 
    }; 

    function setMap(map, blockSize) { 
        var col = 0, 
            row = 0, 
            columns = 0, 
            rows = 0; 
        wall.length = 0; 
        lava.length = 0; 
        for (row = 0, rows = map.length; row < rows; row += 1) { 
            for (col = 0, columns = map[row].length; col < columns; col += 1) { 
                if (map[row][col] === 1) { 
                    wall.push(new Rectangle2D(col * blockSize, row * blockSize, blockSize, blockSize, true)); 
                } 
                else 
                    if (map[row][col] === 2) { 
                        lava.push(new Rectangle2D(col * blockSize, row * blockSize, blockSize, blockSize, true)); 
                    } 
            } 
        } 
        worldWidth = columns * blockSize; worldHeight = rows * blockSize; 
    } 
    
    function reset() { 
        gameover = false; 
    }
    
    function paint(ctx) { 
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        
        ctx.fillStyle = "black"; 
        ctx.fillRect(0,0,canvas.width,canvas.height); 
        ctx.fillStyle = color; 
        //jugador.fill(ctx,cam);
        ctx.fillStyle = '#999'; 
        for (i = 0, l = wall.length; i < l; i += 1) { 
            wall[i].fill(ctx, cam); 
        } 
        // Draw lava 
        ctx.fillStyle = '#f00'; 
        for (i = 0, l = lava.length; i < l; i += 1) { 
            lava[i].fill(ctx, cam); 
        } 
        // Debug last key pressed 
        ctx.fillStyle = '#fff'; 
        ctx.fillText('Last Press: ' + lastPress, 0, 20); 
        // draw game
        if (gameover) { 
            ctx.fillText('GAMEOVER', 150, 100); 
            var z =num;
            socket.emit("eliminar", z);
            javascript:location.reload();
        }
        enemigo=[];
        for(var i=0;i<player.length;i++){
            if(player[i].muerte == false){
                ctx.fillStyle=player[i].color; 
                enemigo.push(new Rectangle2D(player[i].posX,player[i].posY,10,10));
                new Rectangle2D(player[i].posX,player[i].posY,10,10).fill(ctx,cam);
            }
        }
        ctx.fillStyle='red';
        for(var i=0,l=arriba.length;i<l;i++){
             arriba[i].fill(ctx,cam);
        }
        for(var i=0,l=abajo.length;i<l;i++){
            abajo[i].fill(ctx,cam); 
        }
        for(var i=0,l=izq.length;i<l;i++){
            izq[i].fill(ctx,cam);
        }
        for(var i=0,l=der.length;i<l;i++){
            der[i].fill(ctx,cam); 
        }
        var obj={
            nombre: $(txtMen).val(),
            id:num,
            color : color,
            posX: jugador.x,
            posY: jugador.y,
            muerte: gameover
        }
        socket.emit("PlayerPosition", obj);
    }

    socket.on("a",function (data){
      	xxx=data;
      	arriba=[];
      	for(var i=0,l=xxx.length;i<l;i++){
            arriba.push(new Rectangle2D(xxx[i].x,xxx[i].y,xxx[i].z,xxx[i].w)); 
        }
        for(var i=0,l=wall.length-1;i<l;i++){   
            for(var j=0,ll=arriba.length;j<ll;j++){
                if(arriba[j].intersects(wall[i])){
                    arriba[j].top = wall[i].bottom;
                    arriba.splice(j--,1);ll--; 
                }        
            } 
        }
    });

    socket.on("b",function (data){
        abajo=[];
      	aaa=data; 
      	for(var i=0,l=aaa.length;i<l;i++){
            abajo.push(new Rectangle2D(aaa[i].x,aaa[i].y,aaa[i].z,aaa[i].w)); 
        }
        for(var i=0,l=wall.length-1;i<l;i++){   
            for(var j=0,ll=abajo.length;j<ll;j++){
                if(abajo[j].intersects(wall[i])){
                    abajo[j].top = wall[i].bottom;
                    abajo.splice(j--,1);ll--; 
                }    
            } 
        }
    });

    socket.on("c",function (data){
        der=[];
      	bbb=data;
      	for(var i=0,l=bbb.length;i<l;i++){
            der.push(new Rectangle2D(bbb[i].x,bbb[i].y,bbb[i].z,bbb[i].w)); 
        }
        for(var i=0,l=wall.length-1;i<l;i++){   
            for(var j=0,ll=der.length;j<ll;j++){
                if(der[j].intersects(wall[i])){
                    der[j].top = wall[i].bottom;
                    der.splice(j--,1);ll--; 
                }    
            } 
        }
    });

    socket.on("d",function (data){
        izq=[];
      	ddd=data; 
      	for(var i=0,l=ddd.length;i<l;i++){
            izq.push(new Rectangle2D(ddd[i].x,ddd[i].y,ddd[i].z,ddd[i].w)); 
        }
        for(var i=0,l=wall.length-1;i<l;i++){   
            for(var j=0,ll=izq.length;j<ll;j++){
                if(izq[j].intersects(wall[i])){
                    izq[j].top = wall[i].bottom;
                    izq.splice(j--,1);ll--; 
                }    
            } 
        }
    });
    
    socket.on("JugadorDibujado", function (data) {
        player=data;
    });
    
    function run(){ 
        setTimeout(run,50); 
        act(); 
    } 
    
    function repaint(){ 
    	paint(ctx); 
        requestAnimationFrame(repaint);   
    }
    
    function act(){  
        // Move Rect 
        var i = 0, 
            l = 0; 
            // GameOver Reset
        if (gameover) { 
            reset(); 
        } 
        if (pressing[KEY_UP]) { 
            tecla=KEY_UP;
            jugador.y -= 5; 
            for (i = 0, l = wall.length; i < l; i += 1) { 
                if (jugador.intersects(wall[i])) { 
                    jugador.top = wall[i].bottom; 
                } 
            } 
        } 
        if (pressing[KEY_RIGHT]) {
            tecla=KEY_RIGHT 
            jugador.x += 5; 
            for (i = 0, l = wall.length; i < l; i += 1) { 
                if (jugador.intersects(wall[i])) { 
                    jugador.right = wall[i].left; 
                } 
            } 
        } 
        if (pressing[KEY_DOWN]) { 
            tecla=KEY_DOWN;
            jugador.y += 5; 
            for (i = 0, l = wall.length; i < l; i += 1) { 
                if (jugador.intersects(wall[i])) { 
                    jugador.bottom = wall[i].top; 
                } 
            } 
        } 
        if (pressing[KEY_LEFT]) { 
            tecla=KEY_LEFT;
            jugador.x -= 5; 
            for (i = 0, l = wall.length; i < l; i += 1) { 
                if (jugador.intersects(wall[i])) { 
                    jugador.left = wall[i].right; 
                } 
            } 
        } 
        // Out Screen 
        if (jugador.x > worldWidth) { 
            jugador.x = 0; 
        } 
        if (jugador.y > worldHeight) { 
            jugador.y = 0; 
        } 
        if (jugador.x < 0) { 
            jugador.x = worldWidth; 
        } 
        if (jugador.y < 0) { 
            jugador.y = worldHeight; 
        } 
        for (i = 0, l = lava.length; i < l; i += 1) { 
            if (jugador.intersects(lava[i])) { 
                gameover = true;
            }
        } 
        for(i=0,l=arriba.length;i<l;i+=1){
            if(jugador.intersects(arriba[i])) {
                gameover=true;
            }
        }
        for(i=0,l=abajo.length;i<l;i+=1){
            if(jugador.intersects(abajo[i])) {
                gameover=true;
            }
        }
        for(i=0,l=izq.length;i<l;i+=1){
            if(jugador.intersects(izq[i])) {
                gameover=true;
            }
        }
        for(i=0,l=der.length;i<l;i+=1){
            if(jugador.intersects(der[i])) {
                gameover=true;
            }
        }      
        if( lastPress == KEY_SPACE){ 
            if(tecla==KEY_UP){
        	   dato= {
        	       num:num,
        	   	   x:jugador.x,
        	   	   y:jugador.y,
        	   	   z:10,
        	   	   w:10,
        	   }
        	   lastPress=null;
        	   socket.emit("arriba",dato);
            }
            if(tecla==KEY_DOWN){
                datoa= {
                    num:num,
                    x:jugador.x,
                    y:jugador.y,
                    z:10,
                    w:10,
        	    }
                lastPress=null;
                socket.emit("abajo",datoa);
            }
            if(tecla==KEY_LEFT){
                datob= {
        	   	   num:num,
        	   	   x:jugador.x,
        	   	   y:jugador.y,
        	   	   z:10,
        	   	   w:10,
                }
                lastPress=null;
                socket.emit("izq",datob);
            }
            if(tecla==KEY_RIGHT){
                datoc= {
        	   	   num:num,
        	   	   x:jugador.x,
        	   	   y:jugador.y,
        	   	   z:10,
        	   	   w:10,
                }
                lastPress=null;
                socket.emit("der",datoc);
            }
        }
        for(var i=0 ,l=enemigo.length;i<l;i++){   
            for(var j=0,ll=der.length;j<ll;j++){
                if(der[j].intersects(enemigo[i])){
                    der[j].bottom = enemigo[i].top; 
                    der.splice(j--,1);ll--; 
                }
            }
            for(var j=0,ll=izq.length;j<ll;j++){
                if(izq[j].intersects(enemigo[i])){
                    izq[j].left = enemigo[i].right; 
                    izq.splice(j--,1);ll--; 
                }
            }
        }
        cam.focus(jugador.x, jugador.y);  
    } 
    
    document.addEventListener('keydown',function(evt){ 
        lastPress=evt.keyCode; 
        pressing[evt.keyCode]=true; 
    },false); 
    
    document.addEventListener('keyup',function(evt){ 
        pressing[evt.keyCode]=false; 
    },false);
    
    $("#boton").on("click",function(){
        $("#recuadro").slideUp();
        init();  
    });
});


