export class Lector{



    private nosocio:number=0;
    private nombre:string="";
    private telefono:number= 0;
    private direccion:string="";
    private tc:number=0;



    constructor (nosocio:number,nombre:string,telefono:number,direccion:string,tc:number){
        this.nosocio=nosocio;
        this.nombre=nombre;
        this.telefono=telefono;
        this.direccion=direccion;
        this.tc=tc;
    }
    public get_nosocio():number{
        return this.nosocio;
    }
    public set_nosocio(nosocio:number){
        this.nosocio=nosocio;
    }
    public get_nombre():string{
        return this.nombre;
    }
    public set_nombre(nombre:string){
        this.nombre=nombre;
    }
    public get_telefono():number{
        return this.telefono;
    }
    public set_telefono(telefono:number){
        this.telefono=telefono;
    }
    public get_direccion():string{
        return this.direccion;
    }
    public set_direccion(direccion:string){
        this.direccion=direccion;
    }
    public get_tc():number{
        return this.tc;
    }
    public set_tc(tc:number){
        this.tc=tc;
    }

    
    
    public multar (multar : string): string{
        return multar;
    }
    public devolver (devolver:string):string{
        return devolver;
    }
    public prestar (prestar:string):string{
        return prestar;
    }
}