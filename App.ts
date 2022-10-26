import { Autor } from "./Autor";
import { Copia } from "./Copia";
import { Libro } from "./Libro";
import { Lector } from "./Lector";


const Ian= new Autor ("Ian Flores","Mexicano","03/12/06","jw","tipo","IAN",2007);
console.log(Ian);

const AA = new Libro ("El principito","Amoroso","IAN",2007);
console.log(AA);

const Alexis = new Lector(99,"Alexis",23423423,"SC",4353454)

const cop = new Copia("25/oct/2022");
cop.agregarcopia(9,AA,Alexis);

cop.Listacopias();