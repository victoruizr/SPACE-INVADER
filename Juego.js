//import {nave} from "./Nave.js";
import {marciano} from "./Marciano.js";
//import {disparo} from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/

var mar = new marciano(5, 20, 4, 15, 10); //Se le pasa x, y, velocidad, ancho y alto

/*------------------------------------FUNCIONES---------------------------------*/
function crearPantalla(){
    let pantalla = document.createElementNS("http://www.w3.org/2000/svg","svg");
    pantalla.setAttribute("id", "pantalla");
    let div = document.getElementById("contenedor");
    div.appendChild(pantalla);
}

/*-----------------------------------EJECUCION----------------------------------*/
crearPantalla();
