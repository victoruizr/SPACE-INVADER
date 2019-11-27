export class marciano extends objeto{
    constructor(){
        super(this.x,this.y,this.velocidad,this.w,this.h);
        this.id=id;
        this.array=new Array(24);
        this.crearMarciano();
    }

    crearMarciano(){
        for(var i=0;i<this.array.length()-1;i++){
            var fondo=document.getElementById("pantalla");
            var marciano=document.createElementNS("http://www.w3.org/2000/svg","rect");
            marciano.setAttribute("x",this.x);
            marciano.setAttribute("y",this.y);
            marciano.setAttribute("velocidad",this.velocidad);
            marciano.setAttribute("width",this.w);
            marciano.setAttribute("height",this.h);
            fondo.appendChild(marciano);
            this.array[i]=marciano;
            this.x = this.x+5;
        }


    }




    
}
