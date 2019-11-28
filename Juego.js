import {nave} from "./Nave.js"
import {marciano} from "./Marciano.js";
//import {disparo} from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/
    //Se le pasa x, y, velocidad, ancho y alto



/* var mar = new marciano(5, 20, 4, 15, 10);  *///Se le pasa x, y, velocidad, ancho y alto
var nav = new nave(325, 550, 4, 15, 10); // Se le pasa x, y, la velocidad, ancho y alto

/*------------------------------------FUNCIONES---------------------------------*/
function dibujarYRellenarArray(){
    var pantalla = document.getElementById("contenedor");
    var y = pantalla.offsetHeight/8;
    var marcianos=new Array(24);
    var indice = 1; //Esta variable va a determinar el indice para cada nuevo Marciano
    for(let i=0;i<3;i++){
        var x = pantalla.offsetWidth/3;
        for(let j=0;j<8;j++){
            marcianos[indice] = new marciano(x,y,4,15,15); 
            x = x+30; // Esta variable determina el espaciado entre marciano y marciano
            if(j == 7){
                y = y+30; //Esta variable determina el espaciado entre fila y fila
            }
            indice++;
        }
    }
    console.log(marcianos[18]);
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
