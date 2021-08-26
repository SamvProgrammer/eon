import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { persona } from "../modelos/persona";
import { personaServices } from "../services/personaServices";
import { direccionServicesImp } from "./direccionServicesImp";


@Injectable({
    providedIn: 'root'
  })

export class personaServicesImp implements personaServices{
    private arrayPersona:Array<persona> = [];

    public constructor(private direccion:direccionServicesImp){
        this.arrayPersona.push({nombre:"Santiago",frase:"Soy santiago",edad:28,direccion:this.direccion.getDireccionById(1)});
        this.arrayPersona.push({nombre:"andrea",frase:"Soy andrea",edad:28,direccion:this.direccion.getDireccionById(3)});
        this.arrayPersona.push({nombre:"Calinchita",frase:"Soy calinchita",edad:28,direccion:this.direccion.getDireccionById(1)});
        this.arrayPersona.push({nombre:"Soledad",frase:"Soy soledad",edad:28,direccion:this.direccion.getDireccionById(1)});
        this.arrayPersona.push({nombre:"Donnet",frase:"Soy donet",edad:28,direccion:this.direccion.getDireccionById(5)});
        this.arrayPersona.push({nombre:"Diego",frase:"Soy diego",edad:28,direccion:this.direccion.getDireccionById(6)});
        this.arrayPersona.push({nombre:"Joel",frase:"Soy joel",edad:28,direccion:this.direccion.getDireccionById(1)});
        this.arrayPersona.push({nombre:"Luis",frase:"Soy luis",edad:28,direccion:this.direccion.getDireccionById(2)});
        this.arrayPersona.push({nombre:"Michi",frase:"Soy mici",edad:28,direccion:this.direccion.getDireccionById(2)});
        this.arrayPersona.push({nombre:"Jansen",frase:"Soy jansen",edad:28,direccion:this.direccion.getDireccionById(2)});

    }

    public getPersonas():Observable<any>{
        return new BehaviorSubject<Array<persona>>(this.arrayPersona);
    }
}