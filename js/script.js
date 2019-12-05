//iniciando Canvas
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

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

//metodo para dibujar el circulo y llenar el circulo
Pelota.prototype.dibujo = function () {  
    circulo(this.x, this.y, 10, true);
};

//metodo para mover a la pelota
Pelota.prototype.mover = function () {  
    this.x += this.xVelocidad;
    this.y += this.yVelocidad;
};

//metodo para que rebote la pelota con los bordes
Pelota.prototype.tocaBorde = function () {  
    if (this.x < 10 || this.x > 390) {
        this.xVelocidad = -this.xVelocidad;
    };
    if (this.y < 10 || this.y > 390) {
        this.yVelocidad = - this.yVelocidad;  
    };
};

let pelota = new Pelota(); //definiendo el objeto pelota

// se activa la cunfion cada 30 milisegundos
setInterval(function(){  
    context.clearRect(0, 0, 400, 400); // se limpia el canvas
    pelota.dibujo(); // se dibuja la pelota
    pelota.mover(); // se realiza el movimiento
    pelota.tocaBorde(); // rebote de pelota al tocar borde
    context.strokeRect(0, 0, 400, 400); //se completa el proceso
},30);