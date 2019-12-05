//iniciando Canvas
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let pelota = new Pelota();

setInterval(function(){  
    context.clearRect(0, 0, 400, 400);
    pelota.dibujo();
    pelota.mover();
    pelota.tocaBorde();
    context.strokeRect(0, 0, 400, 400);
},30);