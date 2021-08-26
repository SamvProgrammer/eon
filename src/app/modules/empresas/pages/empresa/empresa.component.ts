import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { emmiterPersona } from 'src/app/core/modelos/emitterPersona';
import { persona } from 'src/app/core/modelos/persona';
import { PersonaService } from '../../services/persona.service';

declare var $;
declare var Swal;

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  @ViewChild("obtenertitulo") txttitulomodal:ElementRef;
  public arreglo: Array<persona>;
  public agregarform: boolean = false;
  public emmiterPersona: emmiterPersona;

  constructor(private personaPrd: PersonaService) { }

  ngOnInit(): void {

    this.personaPrd.getPersonas().subscribe(datos => {
      this.arreglo = datos;
    });
  }


  public recibir($event: persona) {
    let texto:string;
    $("#exampleModalLong").modal('hide');
    if (!Boolean(this.emmiterPersona)) {
      this.arreglo.push($event);
      texto = "Registro insertado ";
    } else {
      this.arreglo.splice(this.emmiterPersona.indice, 1, $event);
      texto  = "Registro actualizado";
    }


    Swal.fire(
      'Éxito',
      texto,
      'success'
    )

  }

  public recibirPersona(evento: emmiterPersona) {
    switch (evento.type) {
      case "editar":
        this.emmiterPersona = evento;
        $("#exampleModalLong").modal('show');
        this.txttitulomodal.nativeElement.innerText = "Editar persona"; //Se usa el viewchild para acceder al elemento para el apartado 6 del pdf
        break;
      case "eliminar":
        this.arreglo.splice(evento.indice, 1);

        Swal.fire(
          'Éxito',
          "Registro eliminado",
          'success'
        )

        break;
    }

  }

  public abrirModal(){
    this.agregarform = true;
    this.emmiterPersona=undefined;

    this.txttitulomodal.nativeElement.innerText = "Agregar persona"; //Se usa el viewchild para acceder al elemento para el apartado 6 del pdf
  }



}
