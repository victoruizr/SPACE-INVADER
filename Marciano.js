/*---------------------------------------CREACIÓN DE CLASES-----------------------------*/

export class marciano {
    constructor(x, y, v, w, h) {
        this.x = x;
        this.y = y;
        this.v = v;
        this.w = w;
        this.h = h;
        this.fondo = document.getElementById("pantalla");
        this.crearMarciano();
    }
    crearMarciano() {
        /*  Añadiendo Marciano al div */
        var marciano = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        marciano.setAttribute("x", this.x);
        marciano.setAttribute("y", this.y);
        marciano.setAttribute("width", this.w);
        marciano.setAttribute("height", this.h);
        marciano.setAttribute("style", "fill:red");
        this.fondo.appendChild(marciano);

        /*  Añadiendo marciano al array */
    }
}
