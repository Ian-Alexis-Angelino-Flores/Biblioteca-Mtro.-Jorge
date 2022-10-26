import { Libro } from "./Libro";
import { Lector } from "./Lector";


export class Copia{
    

    private fecha:string="";
    private id:number=0;
    private estado:string="";
    private copias : any[]=[];



    constructor(fecha:string){
        this.fecha=fecha;
    }


    public get_id():number{
        return this.id;
    }
    public set_id(id:number){
        this.id=id;
    }
    public get_estado():string{
        return this.estado;
    }
    public set_estado(estado:string){
        this.estado=estado;
    }
    public get_fecha():string{
        return this.fecha;
    }
    public set_fecha(fecha:string){
        this.fecha=fecha;
    }

    
    public agregarcopia(Nocopias:number,libro:Libro, lector:Lector):void{
        this.id++;
        let Registro={
            Registro:this.id,
            Lector : lector,
            Numcopias: Nocopias,
            Estado: 'proceso',
            libro : libro
        };
        this.copias.push(Registro);
    }
    public Listacopias():void{
        console.log(this.copias);
    }

}