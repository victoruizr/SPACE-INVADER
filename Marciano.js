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
    }
    crearMarciano() {
        /*  Añadiendo Marciano al svg */
        var marciano = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        marciano.setAttribute("x", this.x);
        marciano.setAttribute("y", this.y);
        marciano.setAttribute("width", this.w);
        marciano.setAttribute("height", this.h);
        marciano.setAttribute("style", "fill:red");
        this.fondo.appendChild(marciano);
    }

    moverMarciano(){
        /*MOVER EN EL EJE X*/
        this.x += this.v;
        this.marciano.setAttribute("x", this.x);

        if(this.x+this.w > this.wp){
            this.v = -this.v;
            this.x += this.v;
            this.marciano.setAttribute("x", this.x);
            
        }
        
        if(this.x < 0){
            this.v = -this.v;
            this.x += this.v;
            this.marciano.setAttribute("x", this.x);
        }
    }

}
