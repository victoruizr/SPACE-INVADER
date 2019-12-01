export class nave {
    constructor(x,y, v, w, h,id) {
        this.x=x;
        this.y = y;
        this.v = v;
        this.w = w;
        this.h = h;
        this.id=id;
        this.derecha=true;
        this.izquierda=true;
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
    moverNaveDerecha(velocidad=1)//Funcion que incrementando el valor numerico de la coordenadas de inicio y finalizacion "X" del objeto  "nave", lo desplaza hacia la derecha.
    {
        //En el caso de que this.derecha sea verdadero se incrementa el movimiento derecha
        
        if(this.derecha==true){
            var x1 = parseInt(this.nave.getAttribute('x'));//Obtencion de la coordenada de inicio "X" actual del objeto "nave".
            this.nave.setAttribute('x', x1 + velocidad);//Incrementacion e implementacion de la coordenada de inicio "X" del objeto "nave".
        }
/*         console.log(this.nave.getAttribute('x')); */
        
        //En el caso de que la posicion x que se incrementa es mayor que el ancho -15;
        if (this.nave.getAttribute('x') > this.wp-15) {
            //Se pone la derecha a false y la izquierda a true para que moverNaveIzquierda funcione
            this.derecha=false;
            this.izquierda=true;
        }
    }    
        
    moverNaveIzquierda(velocidad=1)//Funcion que decrementando el valor numerico de la coordenadas de inicio y finalizacion "X" del objeto "nave", lo desplaza hacia la izquierda.
    {
        if(this.izquierda==true){    
            var x1 = parseInt(this.nave.getAttribute('x'));//Obtencion de la coordenada de inicio "X" actual del objeto "nave".
            this.nave.setAttribute('x', x1 - velocidad);//Incrementacion e implementacion de la coordenada de inicio "X" del objeto "nave".
        }
       /*  console.log(this.nave.getAttribute('x')); */

       //En el caso de que la posicion x que se decrementa llegue a 0 pone a this.izquierda a 0 y this.derecha a true para que se pueda mover a la derecha
        if (this.nave.getAttribute('x') < 0) {
            this.izquierda=false
            this.derecha=true;
        }
    }
}
