import { nave } from "./Nave.js"
export class disparo{
    constructor(x1, y1, x2, y2, v){
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        this.v=v;
        this.pantalla = document.getElementById("pantalla");
        this.crearDisparo();
        this.moverDisparo();
    }

    crearDisparo() {
        /*  Añadiendo Disparo al SVG*/
        this.disparo = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.disparo.setAttribute("x1", this.x1);
        this.disparo.setAttribute("y1", this.y1);
        this.disparo.setAttribute("x2", this.x2);
        this.disparo.setAttribute("y2", this.y2);
        this.disparo.setAttribute("style", "stroke:red; stroke-width:4");
        this.disparo.setAttribute("id","disparo");
        this.pantalla.appendChild(this.disparo);
    }

    moverDisparo(){
        /*MOVER EN EL EJE Y*/
        this.y1 -= this.v;
        this.y2 -= this.v;
        this.disparo.setAttribute("y1", this.y1);
        this.disparo.setAttribute("y2", this.y2);
    }

    eliminarDisparo(){
        return true;
    }

    borrarDisparo(){
        document.getElementById("pantalla").removeChild(this.disparo);
    }


    obtenerX1(){
        return this.disparo.x1;
    }

    obtenerX2(){
        return this.disparo.x2;
    }


    obtenerY1(){
        return this.y1;
    }

    obtenerY1(){
        return this.y2;
    }

}