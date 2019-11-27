import {nave} from "./Nave.js"
import {marciano} from "./Marciano.js";
//import {disparo} from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/

var mar = new marciano(5, 20, 4, 15, 10); //Se le pasa x, y, velocidad, ancho y alto
var nav = new nave(325, 550, 4, 15, 10); // Se le pasa x, y, la velocidad, ancho y alto

/*------------------------------------FUNCIONES---------------------------------*/
/* function crearPantalla(){
    let pantalla = document.createElementNS("http://www.w3.org/2000/svg","svg");
    pantalla.setAttribute("id", "pantalla");
    let div = document.getElementById("contenedor");
    div.appendChild(pantalla);
} */

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
