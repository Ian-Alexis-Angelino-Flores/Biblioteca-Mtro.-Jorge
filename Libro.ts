import { Autor } from "./Autor";


export class Libro{
private id:number=0;
private titulo:string="";
private tipo:string="";
private editorial :string="";
private year:number=0;
private Autor: any = [] = [];



constructor(titulo:string,tipo:string,editorial :string,year:number){
    this.titulo=titulo;
    this.tipo=tipo;
    this.editorial=editorial;
    this.year=year;
    this.id += 1;
    this.Autor.push(Autor);
}



public get_titulo():string{
    return this.titulo;
}
public set_titulo(titulo:string){
    this.titulo=titulo;
}
public get_tipo():string{
    return this.tipo;
}
public set_tipo(tipo:string){
    this.tipo=tipo
}
public get_editorial():string{
    return this.editorial;
}
public set_editorial(editorial:string){
    this.editorial=this.editorial;
}
public set_year(year:number){
    this.year=year;
}
public get_year():number{
    return this.year;
}


}