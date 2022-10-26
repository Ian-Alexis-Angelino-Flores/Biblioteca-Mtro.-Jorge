import { Libro } from "./Libro";


export class Autor extends Libro{



    private nombre:string="";
    private nacionalidad:string="";
    private fena:string="";


    constructor(nombre:string,nacionalidad:string,fena:string,titulo:string,tipo:string,editorial :string,year:number){
        super (titulo,tipo,editorial,year);
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.fena=fena;
    }

    
    public get_nombre():string{
        return this.nombre;
    }
    public set_nombre(nombre:string){
        this.nombre=nombre;
    }
    public get_nacionalidad():string{
        return this.nacionalidad;
    }
    public set_nacionalidad(nacionalidad:string){
        this.nacionalidad=nacionalidad;
    }
    public get_fena():string{
        return this.fena;
    }
    public set_fena(fena:string){
        this.fena=fena;
    }

    } 