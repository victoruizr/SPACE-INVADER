export class disparo{
    constructor(x, y, v, w, h){
        this.x=x;
        this.y=y;
        this.v=v;
        this.w=w;
        this.h=h;
        this.pantalla = document.getElementById("pantalla");
        this.crearDisparo();
        this.moverDisparo();
    }

    crearDisparo() {
        /*  Añadiendo Disparo al SVG*/
        this.disparo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.disparo.setAttribute("x", this.x);
        this.disparo.setAttribute("y", this.y);
        this.disparo.setAttribute("width", this.w);
        this.disparo.setAttribute("height", this.h);
        this.disparo.setAttribute("style", "fill:purple");
        this.disparo.setAttribute("id","disparo");
        this.pantalla.appendChild(this.disparo);
    }

    moverDisparo(){
        /*MOVER EN EL EJE Y*/
        this.y -= this.v;
        this.disparo.setAttribute("y", this.y);
    }

    eliminarDisparo(){
        return true;
    }

    obtenerY(){
        return parseInt(this.disparo.getAttribute("y"));
    }

    obtenerH(){
        return parseInt(this.disparo.getAttribute("height"));
    }




}