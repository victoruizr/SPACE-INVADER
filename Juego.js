import { nave } from "./Nave.js"
import { marciano } from "./Marciano.js";
import { disparo } from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/

export class juego {

    constructor() {
        this.h = this.offsetHeight;
        this.w = this.offsetWidth;
        this.marcianos = new Array(24);
        this.crearObjetos();
        this.iniciar();
        this.intervaloMarcianos = setInterval(() => { //Se llama a la funcion mover cada 30 centesimas de segundo
            this.moverMarcianos();
        }, 30);
    }


    dibujarYRellenarArray() {
        var pantalla = document.getElementById("contenedor");
        var y = pantalla.offsetHeight / 8;
        var indice = 0; //Esta variable va a determinar el indice para cada nuevo Marciano
        for (let i = 0; i < 3; i++) {
            var x = pantalla.offsetWidth / 3;
            for (let j = 0; j < 8; j++) {
                this.marcianos[indice] = new marciano(x, y, 4, 15, 15);
                x = x + 30; // Esta variable determina el espaciado entre marciano y marciano
                if (j == 7) {
                    y = y + 30; //Esta variable determina el espaciado entre fila y fila
                }
                indice++; //Incremento del indice meter el siguiente Marciano
            }
        }
    }

    crearObjetos() {
        this.nav = new nave(320, 550, 4, 30,10,"navecita"); // Se le pasa x, y, la velocidad, ancho y alto
        // Se le pasa x, y, la velocidad, ancho y alto
        this.dibujarYRellenarArray();
    }

    controlMovimiento(e) {
        //Una vez obtengo el evento comprueba si el keydown es la tecla
        //d en Assci
        if (e.keyCode == 87) {
            //En este caso en el caso de que el disparo no este creade
            //creo uno
            if (this.disp == undefined) {
                this.disp = new disparo(325, 540, 2, 4, 10);
                /* console.log("w"); */
            }
        }
        
        //Si la tecla en ascci es la a llamo a mover nave izquierda
        if (e.keyCode == 65) {
            /* console.log("a"); */
            this.nav.moverNaveIzquierda();
        }
        //Si la tecla en ascci es la a llamo a mover nave derecha
        if (e.keyCode == 68) {
            /* console.log("d"); */
            this.nav.moverNaveDerecha();
        }
    }


    iniciar() {
        //Añado un keydown y se lo paso a la funcion controlMovimiento como parametro, en este caso e
        document.addEventListener("keydown", (e) => { this.controlMovimiento(e) });
        setInterval(() => {
            //Esto lo que hace es que no te deja lanzar otro disparo hasta que este no desaparezca
            if (this.disp != undefined) {
                //En caso de que no este creado lo creo
                this.disp.moverDisparo();
            }
            //En el caso de que el disparo este creado y este haya llegado a la y se pone undefined
            //para que podamos crear otros
            if ((this.disp != undefined) && (this.disp.obtenerY() + this.disp.obtenerH() <= 0)) {
                this.disp = undefined;
            }
        }, 10);
    }

    moverMarcianos() { // Hay que retocar esta funcion
        //Para cada marciano
        if (this.marcianos[0].x < 0) {
            for (let mar of this.marcianos) {
                mar.v = -mar.v;
            }
        } else if (this.marcianos[this.marcianos.length - 1].x + this.marcianos[this.marcianos.length - 1].w > 650) {
            for (let mar of this.marcianos) {
                mar.v = -mar.v;
            }
        }
    }
}
