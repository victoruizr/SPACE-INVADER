/*---------------------------------------CREACIÓN DE CLASES-----------------------------*/

export class marciano {
    constructor(x, y, v, w, h) {
        this.x = x;
        this.y = y;
        this.v = v;
        this.w = w;
        this.h = h;
        this.contenedor = document.getElementById("contenedor");
        this.wp = this.contenedor.offsetWidth ;
        this.hp = this.contenedor.offsetHeight;
        this.fondo = document.getElementById("pantalla");
        this.crearMarciano();
        this.intervalo = setInterval(() => { //Se llama a la funcion mover cada 30 centesimas de segundo
            this.moverMarciano();
        }, 30);
    }
    crearMarciano() {
        /*  Añadiendo Marciano al svg */
        this.marciano = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.marciano.setAttribute("x", this.x);
        this.marciano.setAttribute("y", this.y);
        this.marciano.setAttribute("width", this.w);
        this.marciano.setAttribute("height", this.h);
        this.marciano.setAttribute("style", "fill:red");
        
        this.fondo.appendChild(this.marciano);
    }

    moverMarciano(){
        /*MOVER EN EL EJE X*/
        this.x += this.v;
        this.marciano.setAttribute("x", this.x);

        /*if (this.x + this.w > this.wp) {
            this.v = -this.v;
            this.marciano.setAttribute("x", this.x);
        }

        if (this.x < 0) {
            this.v = -this.v;
            this.marciano.setAttribute("x", this.x);
        } */
    }

    borrarMarciano(){
        document.getElementById("pantalla").removeChild(this.marciano);
    }
}
