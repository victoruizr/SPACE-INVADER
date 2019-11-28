export class nave{
    constructor(x, y, v, w, h){
        this.x=x;
        this.y=y;
        this.v=v;
        this.w=w;
        this.h=h;
        this.pantalla = document.getElementById("pantalla");
        this.contenedor = document.getElementById("contenedor")
        this.wp = this.contenedor.offsetWidth ;
        this.hp = this.contenedor.offsetHeight;
        this.crearNave();
}

    crearNave(){
        this.nave = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.nave.setAttribute("x", this.x);
        this.nave.setAttribute("y", this.y);
        this.nave.setAttribute("width", this.w);
        this.nave.setAttribute("height", this.h);
        this.nave.setAttribute("style", "fill:white");
        this.pantalla.appendChild(this.nave);
    }

   moverNave(){
        /*MOVER EN EL EJE X*/
        this.x += this.v;
        this.nave.setAttribute("x", this.x);

        if(this.x+this.w > this.wp){
            this.v = -this.v;
            this.x += this.v;
            this.nave.setAttribute("x", this.x);
            
        }
        
        if(this.x < 0){
            this.v = -this.v;
            this.x += this.v;
            this.nave.setAttribute("x", this.x);
        }
    }
}
