/*import {nave} from "./Nave.js";
import {marciano} from "./Marciano.js";
import {disparo} from "./Disparo.js";*/

function crearPantalla(){
    let pantalla = document.createElementNS("http://www.w3.org/2000/svg","svg");
    pantalla.setAttribute("id", "pantalla");
    let div = document.getElementById("contenedor");
    div.appendChild(pantalla);
}

crearPantalla();
