import { Injectable } from "@angular/core";
import { direccion } from "../modelos/direccion";
import { direccionServices } from "../services/direccionServices";



@Injectable({
    providedIn: 'root'
  })
export class direccionServicesImp implements direccionServices{
   private arreglo:Array<direccion> = [
   {id:1,calle:"Avenida central",colonia:"Soledad",pais:"México"},
   {id:2,calle:"laureles",colonia:"San jacinto",pais:"México"},
   {id:3,calle:"Amapolas",colonia:"Col reforma",pais:"México"},
   {id:4,calle:"Abasolo",colonia:"Emiliano",pais:"México"},
   {id:5,calle:"Div oriente",colonia:"Vista hermosa",pais:"México"},
   {id:6,calle:"Locucion",colonia:"Quinta estacion",pais:"México"},
   {id:7,calle:"Emiliano zapata",colonia:"Barrio bajo",pais:"México"}]
   public getDireccionById(id:number):direccion{
       return   this.arreglo.find(o => o.id == id);
   }
}