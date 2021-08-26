import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/core/modelos/persona';
import { personaServicesImp } from 'src/app/core/servicesImp/personaServicesImp';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private personaPrd:personaServicesImp) { }

  public getPersonas():Observable<Array<persona>>{
    return this.personaPrd.getPersonas();
  }
}
