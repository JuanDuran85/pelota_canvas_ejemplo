//iniciando Canvas
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let pelota = new Pelota(); //definiendo el objeto pelota

//constructor de la pelota
let Pelota = function () {
    this.x = 200;
    this.y = 200;
    this.xVelocidad = -4;
    this.yVelocidad = 6;
};

//construccion de la pelota
let circulo = function (x,y,radio,llenarCirculo) {  
    context.beginPath();
    context.arc(x,y,radio,0,2*Math.PI,false); //se dibuja el circulo
    if (llenarCirculo) {
        context.fill();
    }else{
        context.stroke();
    };
};

//metodo para dibujar
Pelota.prototype.dibujo = function () {  
    circulo(this.x, this.y, 10, thue);
};

setInterval(function(){  
    context.clearRect(0, 0, 400, 400); // se limpia el canvas
    pelota.dibujo(); // se dibuja la pelota
    pelota.mover(); // se realiza el movimiento
    pelota.tocaBorde(); // rebote de pelota al tocar borde
    context.strokeRect(0, 0, 400, 400); //se completa el proceso
},30);