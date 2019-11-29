import {nave} from "./Nave.js"
import {marciano} from "./Marciano.js";
import {disparo} from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/

var nav = new nave(325, 550, 4, 15, 10); // Se le pasa x, y, la velocidad, ancho y alto
var disp = new disparo(325, 540, 2, 4, 10); // Se le pasa x, y, la velocidad, ancho y alto
var marcianos = new Array(24);
/*------------------------------------FUNCIONES---------------------------------*/

function dibujarYRellenarArray(){ //Dibuja los Marcianos y los mete en el Array "marcianos"
    var pantalla = document.getElementById("contenedor");
    var y = pantalla.offsetHeight/8;
    var indice = 0; //Esta variable va a determinar el indice para cada nuevo Marciano
    for(let i=0;i<3;i++){
        var x = pantalla.offsetWidth/3;
        for(let j=0;j<8;j++){
            marcianos[indice] = new marciano(x,y,4,15,15); 
            x = x+30; // Esta variable determina el espaciado entre marciano y marciano
            if(j == 7){
                y = y+30; //Esta variable determina el espaciado entre fila y fila
            }
            indice++; //Incremento del indice meter el siguiente Marciano
        }
    }
}

function moverMarcianos(){ // Hay que retocar esta funcion
    //Para cada marciano
    if((marcianos[0]).x < 0){
        for(let mar of marcianos){
            mar.v = -mar.v;
        }
    }else if((marcianos[marcianos.length-1]).x+(marcianos[marcianos.length-1]).w > 650){
        for(let mar of marcianos){
            mar.v = -mar.v;
        }
    }
}

    function moverNave(){ 
        nav.moverNave();
    }


/*-----------------------------------EJECUCION----------------------------------*/
dibujarYRellenarArray();
setInterval(() => { //Se llama a la funcion mover cada 30 centesimas de segundo
    moverMarcianos();
    moverNave();
}, 30);
/* crearPantalla(); */
