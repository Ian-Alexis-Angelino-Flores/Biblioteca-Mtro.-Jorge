export class Prestamo{

    private inicio:string="";
    private fin:string="";

    constructor(inicio:string,fin:string){
        this.fin=fin;
        this.inicio=inicio;
    }

    public get_inicio():string{
        return this.inicio;
    }
    public set_inicio(inicio:string){
        this.inicio=inicio;
    }
    public get_fin():string{
        return this.fin;
    }
    public set_fin(fin:string){
        this.fin=fin;
    }
}