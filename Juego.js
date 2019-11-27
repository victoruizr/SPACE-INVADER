import {nave} from "./Nave.js"
import {marciano} from "./Marciano.js";
//import {disparo} from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/
    //Se le pasa x, y, velocidad, ancho y alto



/* var mar = new marciano(5, 20, 4, 15, 10);  *///Se le pasa x, y, velocidad, ancho y alto
var nav = new nave(325, 550, 4, 15, 10); // Se le pasa x, y, la velocidad, ancho y alto

/*------------------------------------FUNCIONES---------------------------------*/
function dibujarYRellenarArray(){
    var aliens=new marciano(5,5,4,5,5,);
    var contador=aliens.x;
    var array=new Array(24);
    for(var i=0;i<24;i++){
        var aliens=new marciano(contador,5,4,5,5);
        array[i]=aliens;
        contador+=10;
    }
}

dibujarYRellenarArray();




    function pintarNave(){
        nav.crearNave();
    }

    function moverNave(){
        nav.moverNave();
    }



/*-----------------------------------EJECUCION----------------------------------*/
pintarNave();
setInterval(() => { //Se llama a la funcion mover cada 30 centesimas de segundo
    moverNave();
}, 30);
/* crearPantalla(); */
