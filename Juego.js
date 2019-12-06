import { nave } from "./Nave.js"
import { marciano } from "./Marciano.js";
import { disparo } from "./Disparo.js";

/*------------------------------------VARIABLES---------------------------------*/

export class juego {

    constructor() {
        this.contenedor = document.getElementById("contenedor");
        this.pantalla = document.getElementById("pantalla");
        this.h = this.contenedor.offsetHeight;
        this.w = this.contenedor.offsetWidth;
        this.marcianos = new Array(24);
        this.crearObjetos();
        this.iniciar();
        this.intervaloMarcianos = setInterval(() => { //Se llama a la funcion mover cada 30 centesimas de segundo
            this.moverMarcianos();
        }, 30);
    }


    dibujarYRellenarArray() {
        var contenedor = document.getElementById("contenedor");
        var y = contenedor.offsetHeight / 8;
        var indice = 0; //Esta variable va a determinar el indice para cada nuevo Marciano
        for (let i = 0; i < 3; i++) {
            var x = contenedor.offsetWidth / 3;
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
        this.nav = new nave(320, 550, 4, 30, 10); // Se le pasa x, y, la velocidad, ancho y alto
        // Se le pasa x, y, la velocidad, ancho y alto
        this.dibujarYRellenarArray();
    }

    controlMovimiento(e) {
        //Una vez obtengo el evento comprueba si el keydown es la tecla
        //d en Assci
        if ((e.keyCode == 87)|| (e.keyCode == 32) ||(e.keyCode == 38)) {
            //En este caso en el caso de que el disparo no este creade
            //creo uno
            if (this.disp == undefined) {
                this.disp = new disparo((this.nav.x+this.nav.w/2), (this.nav.y -10), (this.nav.x+this.nav.w/2), (this.nav.y), 1); //Se pasa x1, y1, x2, y2
            }
        }
        
        //Si la tecla en ascci es la a llamo a mover nave izquierda
        if ((e.keyCode == 65) || (e.keyCode == 37)) {
            /* console.log("a"); */
            if(this.nav.x > 0)
            this.nav.moverNaveIzquierda();
        }
        //Si la tecla en ascci es la a llamo a mover nave derecha
        if ((e.keyCode == 68) || (e.keyCode == 39)){
            /* console.log("d"); */
            if(this.nav.x + this.nav.w < this.w)
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
                this.eliminarMarcianos();
            }
            //En el caso de que el disparo este creado y este haya llegado a la y se pone undefined
            //para que podamos crear otros
            if ((this.disp != undefined) && (this.disp.y2 <= 0)){
                this.disp.borrarDisparo();
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

    eliminarMarcianos(){
        for(let mar of this.marcianos){
                if(this.disp.x1 >= mar.x && this.disp.y1 <= mar.y){
                    console.log(mar);
                    mar.borrarMarciano();
                    
                    /*this.disp.borrarDisparo();
                    this.disp = undefined;*/ 
                }
        }
    }
}
