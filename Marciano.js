/*---------------------------------------CREACIÓN DE CLASES-----------------------------*/

export class marciano {
    constructor(x, y, v, w, h) {
        this.x = x;
        this.y = y;
        this.v = v;
        this.w = w;
        this.h = h;
        this.array = new Array(24);
/*         this.crearMarciano(); */
        console.log(document.getElementById("pantalla"));
    }
/*
    crearMarciano(){
        for(var i=0;i<23;i++){
            Añadiendo Marciano al div
            var fondo=document.getElementById("pantalla");
            var marciano=document.createElementNS("http://www.w3.org/2000/svg","rect");
            marciano.setAttribute("x",this.x);
            marciano.setAttribute("y",this.y);
            marciano.setAttribute("width",this.w);
            marciano.setAttribute("height",this.h);

            this.fondo.appendChild(marciano);
            Añadiendo marciano al array
            this.array.push(marciano);

            this.x = this.x+5;

        }
    }*/





}
