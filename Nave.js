export class nave {
    constructor(x,y, v, w, h) {
        this.x=x;
        this.y = y;
        this.v = v;
        this.w = w;
        this.h = h;
        this.pantalla = document.getElementById("pantalla");
        this.contenedor = document.getElementById("contenedor")
        this.wp = this.contenedor.offsetWidth;
        this.hp = this.contenedor.offsetHeight;
        this.moviNave = true;
        this.crearNave();
    }

    crearNave() {
        this.nave = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.nave.setAttribute("x", this.x);
        this.nave.setAttribute("y", this.y);
        this.nave.setAttribute("width", this.w);
        this.nave.setAttribute("height", this.h);
        this.nave.setAttribute("style", "fill:white");
        this.pantalla.appendChild(this.nave);
    }

    /* MOVIMIENTO DE NAVE */
    moverNaveDerecha()//Funcion que incrementando el valor numerico de la coordenadas de inicio y finalizacion "X" del objeto  "nave", lo desplaza hacia la derecha.
    {
        this.x = this.x + this.v;//Incrementacion e implementacion de la coordenada de inicio "X" del objeto "nave".
        this.nave.setAttribute("x", this.x); 
    }    
        
    moverNaveIzquierda()//Funcion que decrementando el valor numerico de la coordenadas de inicio y finalizacion "X" del objeto "nave", lo desplaza hacia la izquierda.
    {   
        this.x = this.x - this.v;//Incrementacion e implementacion de la coordenada de inicio "X" del objeto "nave".
        this.nave.setAttribute("x", this.x);
    }
}
