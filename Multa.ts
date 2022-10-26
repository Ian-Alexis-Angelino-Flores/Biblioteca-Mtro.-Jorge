export class Multa{


    private fechainicio:string="";
    private fechafin:string="";


    constructor(fechainicio:string,fechafin:string){
        this.fechainicio=fechainicio;
        this.fechafin=fechafin;
    }



    public get_fechainicio():string{
        return this.fechainicio;
    }
    public set_fechainicio(fechainicio:string){
        this.fechainicio=fechainicio;
    }
    public get_fechafin():string{
        return this.fechafin;
    }
    public set_fechafin(fechafin:string){
        this.fechafin=fechafin;
    }
}