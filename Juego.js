import { nave } from "./Nave.js"
import { marciano } from "./Marciano.js";
import { disparo } from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/

export class juego {

    constructor() {
        this.h = this.offsetHeight;
        this.w = this.offsetWidth;
        this.d = true;
        this.crearObjetos();
        this.iniciar();
    }


    dibujarYRellenarArray() {
        var pantalla = document.getElementById("contenedor");
        var y = pantalla.offsetHeight / 8;
        var marcianos = new Array(24);
        var indice = 1; //Esta variable va a determinar el indice para cada nuevo Marciano
        for (let i = 0; i < 3; i++) {
            var x = pantalla.offsetWidth / 3;
            for (let j = 0; j < 8; j++) {
                marcianos[indice] = new marciano(x, y, 4, 15, 15);
                x = x + 30; // Esta variable determina el espaciado entre marciano y marciano
                if (j == 7) {
                    y = y + 30; //Esta variable determina el espaciado entre fila y fila
                }
                indice++; //Incremento del indice meter el siguiente Marciano
            }
        }
    }

    controlMovimiento(e) {
        if (e.keyCode == 87) {
            this.d = true;
            if (this.disp == undefined) {
                this.disp = new disparo(325, 540, 2, 4, 10);
                console.log("w");
            } else {
                this.d = false;
            }
        }
    }




    crearObjetos() {
        var nav = new nave(325, 550, 4, 15, 10); // Se le pasa x, y, la velocidad, ancho y alto
        // Se le pasa x, y, la velocidad, ancho y alto
        this.dibujarYRellenarArray();
    }


    iniciar() {
        document.addEventListener("keydown", (e) => { this.controlMovimiento(e) });
        setInterval(() => 
            {
            if (this.disp != undefined) {
                this.disp.moverDisparo();
            }
            if((this.disp!=undefined)&&(this.disp.obtenerY()+this.disp.obtenerH()<=0))
            {
                this.disp=undefined;
            }
        }, 10);
    }




}



